const Controller = require('../../core/Controller')

class perfilesController extends Controller {
    /**
     * getPerfiles
     * 
     * @description metodo para listar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getPerfiles(params){
        const objPerfiles = this.getDto('perfiles')
        const data= await objPerfiles.getPerfiles(params)
        return {rows:data.length, data:data}
    }
    /**
     * postPerfiles
     * 
     * @description metodo para insertar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPerfiles(params){
        const objPerfiles = this.getDto('perfiles')
        return objPerfiles.postPerfiles(params)
    }
    /**
     * putPerfiles
     * 
     * @description metodo para actualizar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putPerfiles(params){
        const objPerfiles = this.getDto('perfiles')
        return objPerfiles.putPerfiles(params)
    }
    /**
     * deletePerfiles
     * 
     * @description metodo para eliminar perfiles
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePerfiles(params){
        const objPerfiles = this.getDto('perfiles')
        return objPerfiles.deletePerfiles(params)
    }
}

module.exports = perfilesController