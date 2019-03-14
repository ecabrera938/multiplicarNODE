const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('===================='.red);
    console.log(`Tabla de ${ base} hasta el ${limite}`.green);
    console.log('===================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}

let crearAchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es numerico`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.black)
        });
    });
}

module.exports = {
    crearAchivo,
    listarTabla
}