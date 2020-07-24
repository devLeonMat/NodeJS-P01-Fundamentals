const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite = 12) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
        }
        if (!Number(limite)) {
            reject(`el valor ingresado ${limite} no es un numero`);
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base * i}\n`;
        }
        console.log(`<------------ TABLA  DE ${base} ----------->`.green);
        console.log(data.blue);
    })
};


let crearArchivo = (base, limite=12) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un Numero`);
            return;
        } if (!Number(limite)) {
            reject(`el valor introducido ${limite} no es un Numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log(`El archivo tabla-${base}.txt ha sido creado`);
        })
    })
};

module.exports = {
    crearArchivo, listarArchivo
};