const Model  = require('../../core/Model')

class menuUserModel extends Model {
    /**
     * getMenuUser
     * 
     * @description metodo para listar menuUser
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getMenuUser(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('menu_user')
        return query
    }
    /**
     * postMenuUser
     * 
     * @description metodo para insertar menuUser
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenuUser(params){
        const query = this.knex('menu_user').insert(params)
        return query
    }
    /**
     * putMenuUser
     * 
     * @description metodo para actualizar menuUser
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putMenuUser(params){
        const query = this.knex('menu_user').update(params).where('menu_user',params.id_menu_user)
        return query
    }
    /**
     * deleteMenuUser
     * 
     * @description metodo para eliminar menuUser
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteMenuUser(params){
        const query = this.knex('menu_user').delete(params).where('menu_user',params.id_menu_user)
        return query
    }
}

module.exports = menuUserModel