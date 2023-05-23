const Dto = require('../../core/Dto')

class tipoAsistenciaDto extends Dto {
    /**
     * getTipoAsistencia
     * 
     * @description metodo para listar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getTipoAsistencia(params){
        const objTipoAsistencia = this.getModel('tipoAsistencia')
        return objTipoAsistencia.getTipoAsistencia(params)
    }
    /**
     * postTipoAsistencia
     * 
     * @description metodo para insertar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTipoAsistencia(params){
        const objTipoAsistencia = this.getModel('tipoAsistencia')
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
        const objTipoAsistencia = this.getModel('tipoAsistencia')
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
        const objTipoAsistencia = this.getModel('tipoAsistencia')
        return objTipoAsistencia.deleteTipoAsistencia(params)
    }
}

module.exports = tipoAsistenciaDto