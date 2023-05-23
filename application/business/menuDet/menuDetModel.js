const Model  = require('../../core/Model')

class menuDetModel extends Model {
    /**
     * getMenuDet
     * 
     * @description metodo para listar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getMenuDet(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('menu_det')
        return query
    }
    /**
     * postMenuDet
     * 
     * @description metodo para insertar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenuDet(params){
        const query = this.knex('menu_det').insert(params)
        return query
    }
    /**
     * putMenuDet
     * 
     * @description metodo para actualizar menuDet
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putMenuDet(params){
        const query = this.knex('menu_det').update(params).where('menu_det',params.id_menu_det)
        return query
    }
    /**
     * deleteMenuDet
     * 
     * @description metodo para eliminar menuDet
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteMenuDet(params){
        const query = this.knex('menu_det').delete(params).where('menu_det',params.id_menu_det)
        return query
    }
}

module.exports = menuDetModel