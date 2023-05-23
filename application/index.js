const bcrypt = require('bcryptjs');

const password = 'elchamo123'
console.log("🚀 ~ file: index.js:4 ~ password:", password)
const hash = bcrypt.hashSync(password,8)
console.log("🚀 ~ file: index.js:6 ~ hash:", hash)


console.log(bcrypt.compareSync(password,hash))