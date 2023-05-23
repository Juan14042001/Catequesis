const Controller = require('../../core/Controller')

class menuController extends Controller {
    /**
     * getMenu
     * 
     * @description metodo para listar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getMenu(params){
        const objMenu = this.getDto('menu')
        const data= await objMenu.getMenu(params)
        return {rows:data.length, data:data}
    }
    /**
     * postMenu
     * 
     * @description metodo para insertar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenu(params){
        const objMenu = this.getDto('menu')
        return objMenu.postMenu(params)
    }
    /**
     * putMenu
     * 
     * @description metodo para actualizar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putMenu(params){
        const objMenu = this.getDto('menu')
        return objMenu.putMenu(params)
    }
    /**
     * deleteMenu
     * 
     * @description metodo para eliminar menu
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteMenu(params){
        const objMenu = this.getDto('menu')
        return objMenu.deleteMenu(params)
    }
}

module.exports = menuController