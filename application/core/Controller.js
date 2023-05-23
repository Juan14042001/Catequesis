const Core = require('./Core')
class Controller extends Core{
    getDto(name){
        return this.getFile('Dto',name)
    }
}
module.exports = Controller