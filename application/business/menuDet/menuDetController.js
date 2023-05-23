const Controller = require('../../core/Controller')

class menuDetController extends Controller {
    /**
     * getMenuDet
     * 
     * @description metodo para listar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getMenuDet(params){
        const objMenuDet = this.getDto('menuDet')
        const data= await objMenuDet.getMenuDet(params)
        return {rows:data.length, data:data}
    }
    /**
     * postMenuDet
     * 
     * @description metodo para insertar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenuDet(params){
        const objMenuDet = this.getDto('menuDet')
        return objMenuDet.postMenuDet(params)
    }
    /**
     * putMenuDet
     * 
     * @description metodo para actualizar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putMenuDet(params){
        const objMenuDet = this.getDto('menuDet')
        return objMenuDet.putMenuDet(params)
    }
    /**
     * deleteMenuDet
     * 
     * @description metodo para eliminar menuDet
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteMenuDet(params){
        const objMenuDet = this.getDto('menuDet')
        return objMenuDet.deleteMenuDet(params)
    }
}

module.exports = menuDetController