const Model  = require('../../core/Model')

class menuModel extends Model {
    /**
     * getMenu
     * 
     * @description metodo para listar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getMenu(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('menu')
        return query
    }
    /**
     * postMenu
     * 
     * @description metodo para insertar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenu(params){
        const query = this.knex('menu').insert(params)
        return query
    }
    /**
     * putMenu
     * 
     * @description metodo para actualizar menu
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putMenu(params){
        const query = this.knex('menu').update(params).where('menu',params.id_menu)
        return query
    }
    /**
     * deleteMenu
     * 
     * @description metodo para eliminar menu
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteMenu(params){
        const query = this.knex('menu').delete(params).where('menu',params.id_menu)
        return query
    }
}

module.exports = menuModel