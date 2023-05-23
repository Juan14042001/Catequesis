const Constantes =  require("../../constantes/Constantes")
class Core{
    constructor(){
        this.Constantes = new Constantes()
    }

    getFile(type,name){
        const objFile = require(`../business/${name}/${name}${type}`)
        return new objFile({})
    }
}

module.exports = Core