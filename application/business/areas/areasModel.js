const Model  = require('../../core/Model')

class areasModel extends Model {
    /**
     * getAreas
     * 
     * @description metodo para listar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getAreas(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('areas')
        return query
    }
    /**
     * postAreas
     * 
     * @description metodo para insertar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAreas(params){
        const query = this.knex('areas').insert(params)
        return query
    }
    /**
     * putAreas
     * 
     * @description metodo para actualizar areas
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putAreas(params){
        const query = this.knex('areas').update(params).where('areas',params.id_areas)
        return query
    }
    /**
     * deleteAreas
     * 
     * @description metodo para eliminar areas
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAreas(params){
        const query = this.knex('areas').delete(params).where('areas',params.id_areas)
        return query
    }
}

module.exports = areasModel