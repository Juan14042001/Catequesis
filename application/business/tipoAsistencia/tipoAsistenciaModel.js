const Model  = require('../../core/Model')

class tipoAsistenciaModel extends Model {
    /**
     * getTipoAsistencia
     * 
     * @description metodo para listar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getTipoAsistencia(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('tipo_asistencia')
        return query
    }
    /**
     * postTipoAsistencia
     * 
     * @description metodo para insertar tipoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTipoAsistencia(params){
        const query = this.knex('tipo_asistencia').insert(params)
        return query
    }
    /**
     * putTipoAsistencia
     * 
     * @description metodo para actualizar tipoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putTipoAsistencia(params){
        const query = this.knex('tipo_asistencia').update(params).where('tipo_asistencia',params.id_tipo_asistencia)
        return query
    }
    /**
     * deleteTipoAsistencia
     * 
     * @description metodo para eliminar tipoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTipoAsistencia(params){
        const query = this.knex('tipo_asistencia').delete(params).where('tipo_asistencia',params.id_tipo_asistencia)
        return query
    }
}

module.exports = tipoAsistenciaModel