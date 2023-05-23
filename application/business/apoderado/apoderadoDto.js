const Dto = require('../../core/Dto')

class apoderadoDto extends Dto {
    /**
     * getApoderado
     * 
     * @description metodo para listar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getApoderado(params){
        const objApoderado = this.getModel('apoderado')
        return objApoderado.getApoderado(params)
    }
    /**
     * postApoderado
     * 
     * @description metodo para insertar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postApoderado(params){
        const objApoderado = this.getModel('apoderado')
        return objApoderado.postApoderado(params)
    }
    /**
     * putApoderado
     * 
     * @description metodo para actualizar apoderado
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putApoderado(params){
        const objApoderado = this.getModel('apoderado')
        return objApoderado.putApoderado(params)
    }
    /**
     * deleteApoderado
     * 
     * @description metodo para eliminar apoderado
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteApoderado(params){
        const objApoderado = this.getModel('apoderado')
        return objApoderado.deleteApoderado(params)
    }
}

module.exports = apoderadoDto