const Dto = require('../../core/Dto')

class menuDto extends Dto {
    /**
     * getMenu
     * 
     * @description metodo para listar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getMenu(params){
        const objMenu = this.getModel('menu')
        return objMenu.getMenu(params)
    }
    /**
     * postMenu
     * 
     * @description metodo para insertar menu
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenu(params){
        const objMenu = this.getModel('menu')
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
        const objMenu = this.getModel('menu')
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
        const objMenu = this.getModel('menu')
        return objMenu.deleteMenu(params)
    }
}

module.exports = menuDto