const knex = require('../../config/connection')
const verficarExistenciaTabla  = (name) =>  name === 'productos'

module.exports = {
    verficarExistenciaTabla
}