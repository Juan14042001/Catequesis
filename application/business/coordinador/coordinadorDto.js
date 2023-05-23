const Dto = require('../../core/Dto')

class coordinadorDto extends Dto {
    /**
     * getCoordinador
     * 
     * @description metodo para listar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getCoordinador(params){
        const objCoordinador = this.getModel('coordinador')
        return objCoordinador.getCoordinador(params)
    }
    /**
     * postCoordinador
     * 
     * @description metodo para insertar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCoordinador(params){
        const objCoordinador = this.getModel('coordinador')
        return objCoordinador.postCoordinador(params)
    }
    /**
     * putCoordinador
     * 
     * @description metodo para actualizar coordinador
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putCoordinador(params){
        const objCoordinador = this.getModel('coordinador')
        return objCoordinador.putCoordinador(params)
    }
    /**
     * deleteCoordinador
     * 
     * @description metodo para eliminar coordinador
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCoordinador(params){
        const objCoordinador = this.getModel('coordinador')
        return objCoordinador.deleteCoordinador(params)
    }
}

module.exports = coordinadorDto