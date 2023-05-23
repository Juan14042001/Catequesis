const Controller = require('../../core/Controller')

class tipoAsistenciaController extends Controller {
    /**
     * getTipoAsistencia
     * 
     * @description metodo para listar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getTipoAsistencia(params){
        const objTipoAsistencia = this.getDto('tipoAsistencia')
        const data= await objTipoAsistencia.getTipoAsistencia(params)
        return {rows:data.length, data:data}
    }
    /**
     * postTipoAsistencia
     * 
     * @description metodo para insertar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTipoAsistencia(params){
        const objTipoAsistencia = this.getDto('tipoAsistencia')
        return objTipoAsistencia.postTipoAsistencia(params)
    }
    /**
     * putTipoAsistencia
     * 
     * @description metodo para actualizar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putTipoAsistencia(params){
        const objTipoAsistencia = this.getDto('tipoAsistencia')
        return objTipoAsistencia.putTipoAsistencia(params)
    }
    /**
     * deleteTipoAsistencia
     * 
     * @description metodo para eliminar tipoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTipoAsistencia(params){
        const objTipoAsistencia = this.getDto('tipoAsistencia')
        return objTipoAsistencia.deleteTipoAsistencia(params)
    }
}

module.exports = tipoAsistenciaController