const Dto = require('../../core/Dto')

class menuDetDto extends Dto {
    /**
     * getMenuDet
     * 
     * @description metodo para listar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getMenuDet(params){
        const objMenuDet = this.getModel('menuDet')
        return objMenuDet.getMenuDet(params)
    }
    /**
     * postMenuDet
     * 
     * @description metodo para insertar menuDet
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postMenuDet(params){
        const objMenuDet = this.getModel('menuDet')
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
        const objMenuDet = this.getModel('menuDet')
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
        const objMenuDet = this.getModel('menuDet')
        return objMenuDet.deleteMenuDet(params)
    }
}

module.exports = menuDetDto