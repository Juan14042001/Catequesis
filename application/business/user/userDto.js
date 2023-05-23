const Dto = require('../../core/Dto')

class userDto extends Dto {
    /**
     * getUser
     * 
     * @description metodo para listar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getUser(params){
        const objUser = this.getModel('user')
        if(params.method === 'login'){
            return objUser.getLogin(params)
        }
        if(params.method === 'acceso'){
            return objUser.getUserAccesso(params)
        }
        return objUser.getUser(params)
    }
    /**
     * postUser
     * 
     * @description metodo para insertar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postUser(params){
        const objUser = this.getModel('user')
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
        const objUser = this.getModel('user')
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
        const objUser = this.getModel('user')
        return objUser.deleteUser(params)
    }
}

module.exports = userDto