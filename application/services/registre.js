const fs = require('fs')
const registre = (req,res,next) => {
    try{
        const path = './views/register-online/index.html'
        const content = fs.readFileSync(path)
        res.end(content)
    }catch(e){
        res.send(err).status(404)
    }
}

module.exports = registre