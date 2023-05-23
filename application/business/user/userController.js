const Controller = require('../../core/Controller')

class userController extends Controller {
    /**
     * getUser
     * 
     * @description metodo para listar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getUser(params){
        const objUser = this.getDto('user')
        const data= await objUser.getUser(params)
        return {rows:data.length, data:data}
    }
    /**
     * postUser
     * 
     * @description metodo para insertar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postUser(params){
        const objUser = this.getDto('user')
        return objUser.postUser(params)
    }
    /**
     * putUser
     * 
     * @description metodo para actualizar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putUser(params){
        const objUser = this.getDto('user')
        return objUser.putUser(params)
    }
    /**
     * deleteUser
     * 
     * @description metodo para eliminar user
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteUser(params){
        const objUser = this.getDto('user')
        return objUser.deleteUser(params)
    }
}

module.exports = userController