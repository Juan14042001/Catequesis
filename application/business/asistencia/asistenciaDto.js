const Dto = require('../../core/Dto')

class asistenciaDto extends Dto {
    /**
     * getAsistencia
     * 
     * @description metodo para listar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getAsistencia(params){
        const objAsistencia = this.getModel('asistencia')
        return objAsistencia.getAsistencia(params)
    }
    /**
     * postAsistencia
     * 
     * @description metodo para insertar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAsistencia(params){
        const objAsistencia = this.getModel('asistencia')
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
        const objAsistencia = this.getModel('asistencia')
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
        const objAsistencia = this.getModel('asistencia')
        return objAsistencia.deleteAsistencia(params)
    }
}

module.exports = asistenciaDto