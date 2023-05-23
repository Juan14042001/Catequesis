const knex = require('../../config/connection');
const Corel = require('./Core')
class Model extends Corel {
    constructor(){
        super()
        this.knex  = knex
    }
}


module.exports = Model