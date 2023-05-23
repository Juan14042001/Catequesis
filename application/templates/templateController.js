const Controller = require('../../core/Controller')

class nameController extends Controller {
    /**
     * getName
     * 
     * @description metodo para listar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getName(params){
        const objName = this.getDto('name')
        const data= await objName.getName(params)
        return {rows:data.length, data:data}
    }
    /**
     * postName
     * 
     * @description metodo para insertar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postName(params){
        const objName = this.getDto('name')
        return objName.postName(params)
    }
    /**
     * putName
     * 
     * @description metodo para actualizar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putName(params){
        const objName = this.getDto('name')
        return objName.putName(params)
    }
    /**
     * deleteName
     * 
     * @description metodo para eliminar name
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteName(params){
        const objName = this.getDto('name')
        return objName.deleteName(params)
    }
}

module.exports = nameController