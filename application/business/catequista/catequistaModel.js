const Model  = require('../../core/Model')

class catequistaModel extends Model {
    /**
     * getCatequista
     * 
     * @description metodo para listar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getCatequista(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('catequista')
        return query
    }
    /**
     * postCatequista
     * 
     * @description metodo para insertar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCatequista(params){
        const query = this.knex('catequista').insert(params)
        return query
    }
    /**
     * putCatequista
     * 
     * @description metodo para actualizar catequista
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putCatequista(params){
        const query = this.knex('catequista').update(params).where('catequista',params.id_catequista)
        return query
    }
    /**
     * deleteCatequista
     * 
     * @description metodo para eliminar catequista
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCatequista(params){
        const query = this.knex('catequista').delete(params).where('catequista',params.id_catequista)
        return query
    }
}

module.exports = catequistaModel