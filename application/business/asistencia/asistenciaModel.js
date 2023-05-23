const Model  = require('../../core/Model')

class asistenciaModel extends Model {
    /**
     * getAsistencia
     * 
     * @description metodo para listar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getAsistencia(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('asistencia')
        return query
    }
    /**
     * postAsistencia
     * 
     * @description metodo para insertar asistencia
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAsistencia(params){
        const query = this.knex('asistencia').insert(params)
        return query
    }
    /**
     * putAsistencia
     * 
     * @description metodo para actualizar asistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putAsistencia(params){
        const query = this.knex('asistencia').update(params).where('asistencia',params.id_asistencia)
        return query
    }
    /**
     * deleteAsistencia
     * 
     * @description metodo para eliminar asistencia
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAsistencia(params){
        const query = this.knex('asistencia').delete(params).where('asistencia',params.id_asistencia)
        return query
    }
}

module.exports = asistenciaModel