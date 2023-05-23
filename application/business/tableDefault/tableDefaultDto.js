const Dto = require('../../core/Dto')

class tableDefaultDto extends Dto {
    /**
     * getTableDefault
     * 
     * @description metodo para listar tableDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getTableDefault(params){
        const objTableDefault = this.getModel('tableDefault')
        return objTableDefault.getTableDefault(params)
    }
    /**
     * postTableDefault
     * 
     * @description metodo para insertar tableDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTableDefault(params){
        const objTableDefault = this.getModel('tableDefault')
        return objTableDefault.postTableDefault(params)
    }
    /**
     * putTableDefault
     * 
     * @description metodo para actualizar tableDefault
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putTableDefault(params){
        const objTableDefault = this.getModel('tableDefault')
        return objTableDefault.putTableDefault(params)
    }
    /**
     * deleteTableDefault
     * 
     * @description metodo para eliminar tableDefault
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTableDefault(params){
        const objTableDefault = this.getModel('tableDefault')
        return objTableDefault.deleteTableDefault(params)
    }
}

module.exports = tableDefaultDto