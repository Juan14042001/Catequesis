const Model  = require('../../core/Model')

class eventoAsistenciaModel extends Model {
    /**
     * getEventoAsistencia
     * 
     * @description metodo para listar eventoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getEventoAsistencia(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('evento_asistencia')
        return query
    }
    /**
     * postEventoAsistencia
     * 
     * @description metodo para insertar eventoAsistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postEventoAsistencia(params){
        const query = this.knex('evento_asistencia').insert(params)
        return query
    }
    /**
     * putEventoAsistencia
     * 
     * @description metodo para actualizar eventoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putEventoAsistencia(params){
        const query = this.knex('evento_asistencia').update(params).where('evento_asistencia',params.id_evento_asistencia)
        return query
    }
    /**
     * deleteEventoAsistencia
     * 
     * @description metodo para eliminar eventoAsistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteEventoAsistencia(params){
        const query = this.knex('evento_asistencia').delete(params).where('evento_asistencia',params.id_evento_asistencia)
        return query
    }
}

module.exports = eventoAsistenciaModel