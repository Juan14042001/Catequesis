const Dto = require('../../core/Dto')

class menuUserDto extends Dto {
    /**
     * getMenuUser
     * 
     * @description metodo para listar menuUser
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getMenuUser(params){
        const objMenuUser = this.getModel('menuUser')
        return objMenuUser.getMenuUser(params)
    }
    /**
     * postMenuUser
     * 
     * @description metodo para insertar menuUser
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenuUser(params){
        const objMenuUser = this.getModel('menuUser')
        return objMenuUser.postMenuUser(params)
    }
    /**
     * putMenuUser
     * 
     * @description metodo para actualizar menuUser
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putMenuUser(params){
        const objMenuUser = this.getModel('menuUser')
        return objMenuUser.putMenuUser(params)
    }
    /**
     * deleteMenuUser
     * 
     * @description metodo para eliminar menuUser
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteMenuUser(params){
        const objMenuUser = this.getModel('menuUser')
        return objMenuUser.deleteMenuUser(params)
    }
}

module.exports = menuUserDto