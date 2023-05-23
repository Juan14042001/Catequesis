const Controller = require('../../core/Controller')

class menuUserController extends Controller {
    /**
     * getMenuUser
     * 
     * @description metodo para listar menuUser
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getMenuUser(params){
        const objMenuUser = this.getDto('menuUser')
        const data= await objMenuUser.getMenuUser(params)
        return {rows:data.length, data:data}
    }
    /**
     * postMenuUser
     * 
     * @description metodo para insertar menuUser
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenuUser(params){
        const objMenuUser = this.getDto('menuUser')
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
        const objMenuUser = this.getDto('menuUser')
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
        const objMenuUser = this.getDto('menuUser')
        return objMenuUser.deleteMenuUser(params)
    }
}

module.exports = menuUserController