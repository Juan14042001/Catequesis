const Dto = require('../../core/Dto')

class horarioDto extends Dto {
    /**
     * getHorario
     * 
     * @description metodo para listar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getHorario(params){
        const objHorario = this.getModel('horario')
        return objHorario.getHorario(params)
    }
    /**
     * postHorario
     * 
     * @description metodo para insertar horario
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postHorario(params){
        const objHorario = this.getModel('horario')
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
        const objHorario = this.getModel('horario')
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
        const objHorario = this.getModel('horario')
        return objHorario.deleteHorario(params)
    }
}

module.exports = horarioDto