const Model  = require('../../core/Model')

class personaModel extends Model {
    /**
     * getPersona
     * 
     * @description metodo para listar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPersona(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('persona')
        return query
    }
    /**
     * postPersona
     * 
     * @description metodo para insertar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPersona(params){
        const query = this.knex('persona').insert(params)
        return query
    }
    /**
     * putPersona
     * 
     * @description metodo para actualizar persona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPersona(params){
        const query = this.knex('persona').update(params).where('persona',params.id_persona)
        return query
    }
    /**
     * deletePersona
     * 
     * @description metodo para eliminar persona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePersona(params){
        const query = this.knex('persona').delete(params).where('persona',params.id_persona)
        return query
    }
}

module.exports = personaModel