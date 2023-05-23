if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

let connection = {}
if(process.env.NODE_ENV !== 'production'){
    
    connection = {
        host :  '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'password',
        database : 'catequesis'
    }
    
}

const knex = require('knex')({
    client: 'mysql',
    connection
  });


module.exports = knex