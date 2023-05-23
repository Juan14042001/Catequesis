const Dto = require('../../core/Dto')

class perfilPersonaDto extends Dto {
    /**
     * getPerfilPersona
     * 
     * @description metodo para listar perfilPersona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPerfilPersona(params){
        const objPerfilPersona = this.getModel('perfilPersona')
        return objPerfilPersona.getPerfilPersona(params)
    }
    /**
     * postPerfilPersona
     * 
     * @description metodo para insertar perfilPersona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPerfilPersona(params){
        const objPerfilPersona = this.getModel('perfilPersona')
        return objPerfilPersona.postPerfilPersona(params)
    }
    /**
     * putPerfilPersona
     * 
     * @description metodo para actualizar perfilPersona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPerfilPersona(params){
        const objPerfilPersona = this.getModel('perfilPersona')
        return objPerfilPersona.putPerfilPersona(params)
    }
    /**
     * deletePerfilPersona
     * 
     * @description metodo para eliminar perfilPersona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePerfilPersona(params){
        const objPerfilPersona = this.getModel('perfilPersona')
        return objPerfilPersona.deletePerfilPersona(params)
    }
}

module.exports = perfilPersonaDto