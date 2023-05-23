const Controller = require('../../core/Controller')

class perfilPersonaController extends Controller {
    /**
     * getPerfilPersona
     * 
     * @description metodo para listar perfilPersona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getPerfilPersona(params){
        const objPerfilPersona = this.getDto('perfilPersona')
        const data= await objPerfilPersona.getPerfilPersona(params)
        return {rows:data.length, data:data}
    }
    /**
     * postPerfilPersona
     * 
     * @description metodo para insertar perfilPersona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPerfilPersona(params){
        const objPerfilPersona = this.getDto('perfilPersona')
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
        const objPerfilPersona = this.getDto('perfilPersona')
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
        const objPerfilPersona = this.getDto('perfilPersona')
        return objPerfilPersona.deletePerfilPersona(params)
    }
}

module.exports = perfilPersonaController