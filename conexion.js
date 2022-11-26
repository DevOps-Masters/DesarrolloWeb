const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:misiontic2022@cluster0.7jz5qsj.mongodb.net/?retryWrites=true&w=majority');

const objetobd = mongoose.connection

objetobd.on('connected', () => {console.log('Conexion Correcta a mongoDB')})
objetobd.on('error  ', () => {console.log('Error en la conexión a mongoDB')})

module.exports = mongoose