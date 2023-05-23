const Model  = require('../../core/Model')

class perfilPersonaModel extends Model {
    /**
     * getPerfilPersona
     * 
     * @description metodo para listar perfilPersona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPerfilPersona(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('perfil_persona')
        return query
    }
    /**
     * postPerfilPersona
     * 
     * @description metodo para insertar perfilPersona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPerfilPersona(params){
        const query = this.knex('perfil_persona').insert(params)
        return query
    }
    /**
     * putPerfilPersona
     * 
     * @description metodo para actualizar perfilPersona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPerfilPersona(params){
        const query = this.knex('perfil_persona').update(params).where('perfil_persona',params.id_perfil_persona)
        return query
    }
    /**
     * deletePerfilPersona
     * 
     * @description metodo para eliminar perfilPersona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePerfilPersona(params){
        const query = this.knex('perfil_persona').delete(params).where('perfil_persona',params.id_perfil_persona)
        return query
    }
}

module.exports = perfilPersonaModel