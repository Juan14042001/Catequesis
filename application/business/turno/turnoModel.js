const Model  = require('../../core/Model')

class turnoModel extends Model {
    /**
     * getTurno
     * 
     * @description metodo para listar turno
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getTurno(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('turno')
        return query
    }
    /**
     * postTurno
     * 
     * @description metodo para insertar turno
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTurno(params){
        const query = this.knex('turno').insert(params)
        return query
    }
    /**
     * putTurno
     * 
     * @description metodo para actualizar turno
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putTurno(params){
        const query = this.knex('turno').update(params).where('turno',params.id_turno)
        return query
    }
    /**
     * deleteTurno
     * 
     * @description metodo para eliminar turno
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTurno(params){
        const query = this.knex('turno').delete(params).where('turno',params.id_turno)
        return query
    }
}

module.exports = turnoModel