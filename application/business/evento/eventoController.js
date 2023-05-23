const Controller = require('../../core/Controller')

class eventoController extends Controller {
    /**
     * getEvento
     * 
     * @description metodo para listar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getEvento(params){
        const objEvento = this.getDto('evento')
        const data= await objEvento.getEvento(params)
        return {rows:data.length, data:data}
    }
    /**
     * postEvento
     * 
     * @description metodo para insertar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postEvento(params){
        const objEvento = this.getDto('evento')
        return objEvento.postEvento(params)
    }
    /**
     * putEvento
     * 
     * @description metodo para actualizar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putEvento(params){
        const objEvento = this.getDto('evento')
        return objEvento.putEvento(params)
    }
    /**
     * deleteEvento
     * 
     * @description metodo para eliminar evento
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteEvento(params){
        const objEvento = this.getDto('evento')
        return objEvento.deleteEvento(params)
    }
}

module.exports = eventoController