const Model  = require('../../core/Model')

class horarioModel extends Model {
    /**
     * getHorario
     * 
     * @description metodo para listar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getHorario(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('horario')
        return query
    }
    /**
     * postHorario
     * 
     * @description metodo para insertar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postHorario(params){
        const query = this.knex('horario').insert(params)
        return query
    }
    /**
     * putHorario
     * 
     * @description metodo para actualizar horario
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putHorario(params){
        const query = this.knex('horario').update(params).where('horario',params.id_horario)
        return query
    }
    /**
     * deleteHorario
     * 
     * @description metodo para eliminar horario
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteHorario(params){
        const query = this.knex('horario').delete(params).where('horario',params.id_horario)
        return query
    }
}

module.exports = horarioModel