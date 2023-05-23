const Controller = require('../../core/Controller')

class horarioController extends Controller {
    /**
     * getHorario
     * 
     * @description metodo para listar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getHorario(params){
        const objHorario = this.getDto('horario')
        const data= await objHorario.getHorario(params)
        return {rows:data.length, data:data}
    }
    /**
     * postHorario
     * 
     * @description metodo para insertar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postHorario(params){
        const objHorario = this.getDto('horario')
        return objHorario.postHorario(params)
    }
    /**
     * putHorario
     * 
     * @description metodo para actualizar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putHorario(params){
        const objHorario = this.getDto('horario')
        return objHorario.putHorario(params)
    }
    /**
     * deleteHorario
     * 
     * @description metodo para eliminar horario
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteHorario(params){
        const objHorario = this.getDto('horario')
        return objHorario.deleteHorario(params)
    }
}

module.exports = horarioController