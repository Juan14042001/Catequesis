const Dto = require('../../core/Dto')

class turnoDto extends Dto {
    /**
     * getTurno
     * 
     * @description metodo para listar turno
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getTurno(params){
        const objTurno = this.getModel('turno')
        return objTurno.getTurno(params)
    }
    /**
     * postTurno
     * 
     * @description metodo para insertar turno
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTurno(params){
        const objTurno = this.getModel('turno')
        return objTurno.postTurno(params)
    }
    /**
     * putTurno
     * 
     * @description metodo para actualizar turno
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putTurno(params){
        const objTurno = this.getModel('turno')
        return objTurno.putTurno(params)
    }
    /**
     * deleteTurno
     * 
     * @description metodo para eliminar turno
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTurno(params){
        const objTurno = this.getModel('turno')
        return objTurno.deleteTurno(params)
    }
}

module.exports = turnoDto