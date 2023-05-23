const Model  = require('../../core/Model')

class catequistaSalonModel extends Model {
    /**
     * getCatequistaSalon
     * 
     * @description metodo para listar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getCatequistaSalon(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('catequista_salon')
        return query
    }
    /**
     * postCatequistaSalon
     * 
     * @description metodo para insertar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCatequistaSalon(params){
        const query = this.knex('catequista_salon').insert(params)
        return query
    }
    /**
     * putCatequistaSalon
     * 
     * @description metodo para actualizar catequistaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putCatequistaSalon(params){
        const query = this.knex('catequista_salon').update(params).where('catequista_salon',params.id_catequista_salon)
        return query
    }
    /**
     * deleteCatequistaSalon
     * 
     * @description metodo para eliminar catequistaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCatequistaSalon(params){
        const query = this.knex('catequista_salon').delete(params).where('catequista_salon',params.id_catequista_salon)
        return query
    }
}

module.exports = catequistaSalonModel