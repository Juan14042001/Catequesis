const Dto = require('../../core/Dto')

class perfilesDto extends Dto {
    /**
     * getPerfiles
     * 
     * @description metodo para listar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPerfiles(params){
        const objPerfiles = this.getModel('perfiles')
        return objPerfiles.getPerfiles(params)
    }
    /**
     * postPerfiles
     * 
     * @description metodo para insertar perfiles
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPerfiles(params){
        const objPerfiles = this.getModel('perfiles')
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
        const objPerfiles = this.getModel('perfiles')
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
        const objPerfiles = this.getModel('perfiles')
        return objPerfiles.deletePerfiles(params)
    }
}

module.exports = perfilesDto