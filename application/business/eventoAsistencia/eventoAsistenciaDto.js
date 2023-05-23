const Dto = require('../../core/Dto')

class eventoAsistenciaDto extends Dto {
    /**
     * getEventoAsistencia
     * 
     * @description metodo para listar eventoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getEventoAsistencia(params){
        const objEventoAsistencia = this.getModel('eventoAsistencia')
        return objEventoAsistencia.getEventoAsistencia(params)
    }
    /**
     * postEventoAsistencia
     * 
     * @description metodo para insertar eventoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postEventoAsistencia(params){
        const objEventoAsistencia = this.getModel('eventoAsistencia')
        return objEventoAsistencia.postEventoAsistencia(params)
    }
    /**
     * putEventoAsistencia
     * 
     * @description metodo para actualizar eventoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putEventoAsistencia(params){
        const objEventoAsistencia = this.getModel('eventoAsistencia')
        return objEventoAsistencia.putEventoAsistencia(params)
    }
    /**
     * deleteEventoAsistencia
     * 
     * @description metodo para eliminar eventoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteEventoAsistencia(params){
        const objEventoAsistencia = this.getModel('eventoAsistencia')
        return objEventoAsistencia.deleteEventoAsistencia(params)
    }
}

module.exports = eventoAsistenciaDto