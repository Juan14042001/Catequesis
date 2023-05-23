const Model  = require('../../core/Model')

class userModel extends Model {
    /**
     * getUser
     * 
     * @description metodo para listar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getUser(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('user')
        return query
    }

    /**
     * getLogin
     * @description metodo para obtener el login
     * @params {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getLogin(params){
        const query = this.knex.select('*').from('user').where('username',params.user)

        return query
    }
    /**
     * getUserAccesso
     * 
     */

    getUserAccesso(params){
        const query = this.knex.select('*').from('user as u').join('user_acceso as ac','u.id_user','=',"ac.id_user").where('u.username',params.username)
        return query
    }
    /**
     * postUser
     * 
     * @description metodo para insertar user
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postUser(params){
        const query = this.knex('user').insert(params)
        return query
    }
    /**
     * putUser
     * 
     * @description metodo para actualizar user
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putUser(params){
        const query = this.knex('user').update(params).where('user',params.id_user)
        return query
    }
    /**
     * deleteUser
     * 
     * @description metodo para eliminar user
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteUser(params){
        const query = this.knex('user').delete(params).where('user',params.id_user)
        return query
    }
}

module.exports = userModel