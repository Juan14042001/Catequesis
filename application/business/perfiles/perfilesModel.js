const Model  = require('../../core/Model')

class perfilesModel extends Model {
    /**
     * getPerfiles
     * 
     * @description metodo para listar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPerfiles(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('perfiles')
        return query
    }
    /**
     * postPerfiles
     * 
     * @description metodo para insertar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPerfiles(params){
        const query = this.knex('perfiles').insert(params)
        return query
    }
    /**
     * putPerfiles
     * 
     * @description metodo para actualizar perfiles
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPerfiles(params){
        const query = this.knex('perfiles').update(params).where('perfiles',params.id_perfiles)
        return query
    }
    /**
     * deletePerfiles
     * 
     * @description metodo para eliminar perfiles
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePerfiles(params){
        const query = this.knex('perfiles').delete(params).where('perfiles',params.id_perfiles)
        return query
    }
}

module.exports = perfilesModel