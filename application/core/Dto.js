const Core = require('./Core')
class Dto extends Core{
    getModel(name){
        return this.getFile('Model',name)
    }
}

module.exports = Dto