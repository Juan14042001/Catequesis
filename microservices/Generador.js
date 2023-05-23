const { verficarExistenciaTabla } = require('../config/database');
const fs = require('fs')
const nameTable = process.argv[2]


class Generator{

    constructor({name}){

        this.name = name
    }

    async generarArchivos(){
        try{
            let name =  this.name
            let table = this.name
            const verificarTabla = await verficarExistenciaTabla(name)

            if(!verificarTabla){
                throw new Error('No existe la tabla')
            }

            if(name.includes('_')){
                const nametable = name.split('_')
                name = nametable[0] + nametable[1][0].toUpperCase() + nametable[1].substring(1)
            }

        
            const upName = name[0].toUpperCase() + name.substring(1)

            if(!fs.existsSync(`application/business/${name}`)){
                fs.mkdirSync(`application/business/${name}`)
            }
    
            if(!fs.existsSync(`application/business/${name}/${name}Controller`)){
                const controllerTemplate = await fs.readFileSync('application/templates/templateController.js','utf-8')
                const template = controllerTemplate.replace(/name/g,name).replace(/Name/g,upName)
                fs.writeFileSync(`application/business/${name}/${name}Controller.js`,template)
            }
    
            if(!fs.existsSync(`application/business/${name}/${name}Dto`)){
                const dtoTemplate = await fs.readFileSync('application/templates/templateDto.js','utf-8')
                const template = dtoTemplate.replace(/name/g,name).replace(/Name/g,upName)
                fs.writeFileSync(`application/business/${name}/${name}Dto.js`,template)
            }
    
            if(!fs.existsSync(`application/business/${name}/${name}Model`)){
                const modelTemplate = await fs.readFileSync('application/templates/templateModel.js','utf-8')
                const template = modelTemplate.replace(/name/g,name).replace(/Name/g,upName).replace(/table/g, table)
                fs.writeFileSync(`application/business/${name}/${name}Model.js`,template)
            }
    
            console.log('Archivos generados correctamente')
        }catch(e){
            throw new Error(e)
        }
    }
}


if(!nameTable || nameTable.length === 0){
    console.error('Nombre de tabla incorrecto')
}else{
    new Generator({name:nameTable}).generarArchivos()
}
