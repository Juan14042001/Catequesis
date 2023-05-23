const Dto = require('../../core/Dto')

class nameDto extends Dto {
    /**
     * getName
     * 
     * @description metodo para listar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getName(params){
        const objName = this.getModel('name')
        return objName.getName(params)
    }
    /**
     * postName
     * 
     * @description metodo para insertar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postName(params){
        const objName = this.getModel('name')
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
        const objName = this.getModel('name')
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
        const objName = this.getModel('name')
        return objName.deleteName(params)
    }
}

module.exports = nameDto