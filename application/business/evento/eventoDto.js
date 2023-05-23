const Dto = require('../../core/Dto')

class eventoDto extends Dto {
    /**
     * getEvento
     * 
     * @description metodo para listar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getEvento(params){
        const objEvento = this.getModel('evento')
        return objEvento.getEvento(params)
    }
    /**
     * postEvento
     * 
     * @description metodo para insertar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postEvento(params){
        const objEvento = this.getModel('evento')
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
        const objEvento = this.getModel('evento')
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
        const objEvento = this.getModel('evento')
        return objEvento.deleteEvento(params)
    }
}

module.exports = eventoDto