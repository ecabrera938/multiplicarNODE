const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 5
    }
}

const argv = require('yargs')
    .command('listar', 'impirme en consola la table de multiplicar', opt)
    .command('crear', 'Crea un TXT con la table de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}