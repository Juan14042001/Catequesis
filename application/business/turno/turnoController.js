const Controller = require('../../core/Controller')

class turnoController extends Controller {
    /**
     * getTurno
     * 
     * @description metodo para listar turno
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getTurno(params){
        const objTurno = this.getDto('turno')
        const data= await objTurno.getTurno(params)
        return {rows:data.length, data:data}
    }
    /**
     * postTurno
     * 
     * @description metodo para insertar turno
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTurno(params){
        const objTurno = this.getDto('turno')
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
        const objTurno = this.getDto('turno')
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
        const objTurno = this.getDto('turno')
        return objTurno.deleteTurno(params)
    }
}

module.exports = turnoController