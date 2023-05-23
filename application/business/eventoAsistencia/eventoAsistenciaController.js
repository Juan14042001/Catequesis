const Controller = require('../../core/Controller')

class eventoAsistenciaController extends Controller {
    /**
     * getEventoAsistencia
     * 
     * @description metodo para listar eventoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getEventoAsistencia(params){
        const objEventoAsistencia = this.getDto('eventoAsistencia')
        const data= await objEventoAsistencia.getEventoAsistencia(params)
        return {rows:data.length, data:data}
    }
    /**
     * postEventoAsistencia
     * 
     * @description metodo para insertar eventoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postEventoAsistencia(params){
        const objEventoAsistencia = this.getDto('eventoAsistencia')
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
        const objEventoAsistencia = this.getDto('eventoAsistencia')
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
        const objEventoAsistencia = this.getDto('eventoAsistencia')
        return objEventoAsistencia.deleteEventoAsistencia(params)
    }
}

module.exports = eventoAsistenciaController