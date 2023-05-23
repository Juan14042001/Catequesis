const Model  = require('../../core/Model')

class personaSalonModel extends Model {
    /**
     * getPersonaSalon
     * 
     * @description metodo para listar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPersonaSalon(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('persona_salon')
        return query
    }
    /**
     * postPersonaSalon
     * 
     * @description metodo para insertar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPersonaSalon(params){
        const query = this.knex('persona_salon').insert(params)
        return query
    }
    /**
     * putPersonaSalon
     * 
     * @description metodo para actualizar personaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPersonaSalon(params){
        const query = this.knex('persona_salon').update(params).where('persona_salon',params.id_persona_salon)
        return query
    }
    /**
     * deletePersonaSalon
     * 
     * @description metodo para eliminar personaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePersonaSalon(params){
        const query = this.knex('persona_salon').delete(params).where('persona_salon',params.id_persona_salon)
        return query
    }
}

module.exports = personaSalonModel