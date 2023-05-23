const Controller = require('../../core/Controller')

class asistenciaController extends Controller {
    /**
     * getAsistencia
     * 
     * @description metodo para listar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getAsistencia(params){
        const objAsistencia = this.getDto('asistencia')
        const data= await objAsistencia.getAsistencia(params)
        return {rows:data.length, data:data}
    }
    /**
     * postAsistencia
     * 
     * @description metodo para insertar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAsistencia(params){
        const objAsistencia = this.getDto('asistencia')
        return objAsistencia.postAsistencia(params)
    }
    /**
     * putAsistencia
     * 
     * @description metodo para actualizar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putAsistencia(params){
        const objAsistencia = this.getDto('asistencia')
        return objAsistencia.putAsistencia(params)
    }
    /**
     * deleteAsistencia
     * 
     * @description metodo para eliminar asistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAsistencia(params){
        const objAsistencia = this.getDto('asistencia')
        return objAsistencia.deleteAsistencia(params)
    }
}

module.exports = asistenciaController