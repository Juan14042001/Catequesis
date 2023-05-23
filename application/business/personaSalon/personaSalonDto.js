const Dto = require('../../core/Dto')

class personaSalonDto extends Dto {
    /**
     * getPersonaSalon
     * 
     * @description metodo para listar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPersonaSalon(params){
        const objPersonaSalon = this.getModel('personaSalon')
        return objPersonaSalon.getPersonaSalon(params)
    }
    /**
     * postPersonaSalon
     * 
     * @description metodo para insertar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPersonaSalon(params){
        const objPersonaSalon = this.getModel('personaSalon')
        return objPersonaSalon.postPersonaSalon(params)
    }
    /**
     * putPersonaSalon
     * 
     * @description metodo para actualizar personaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPersonaSalon(params){
        const objPersonaSalon = this.getModel('personaSalon')
        return objPersonaSalon.putPersonaSalon(params)
    }
    /**
     * deletePersonaSalon
     * 
     * @description metodo para eliminar personaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePersonaSalon(params){
        const objPersonaSalon = this.getModel('personaSalon')
        return objPersonaSalon.deletePersonaSalon(params)
    }
}

module.exports = personaSalonDto