const Model  = require('../../core/Model')

class salonModel extends Model {
    /**
     * getSalon
     * 
     * @description metodo para listar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getSalon(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('salon')
        return query
    }
    /**
     * postSalon
     * 
     * @description metodo para insertar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postSalon(params){
        const query = this.knex('salon').insert(params)
        return query
    }
    /**
     * putSalon
     * 
     * @description metodo para actualizar salon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putSalon(params){
        const query = this.knex('salon').update(params).where('salon',params.id_salon)
        return query
    }
    /**
     * deleteSalon
     * 
     * @description metodo para eliminar salon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteSalon(params){
        const query = this.knex('salon').delete(params).where('salon',params.id_salon)
        return query
    }
}

module.exports = salonModel