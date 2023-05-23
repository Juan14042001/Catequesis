const knex = require('./connection')

const verficarExistenciaTabla = async (nametable) => {
    try{
        if(!nametable || nametable.length === 0){
            throw Error('No se envio el nombre de la tabla')
        }
        const query = await knex.raw(`SHOW FULL TABLES FROM catequesis LIKE '%${nametable}%'`)
        const [firstElement] = [...query]
        return firstElement && firstElement.length > 0
    }catch(e){
        throw Error(e.message)
    }

}


module.exports = {
    verficarExistenciaTabla
}