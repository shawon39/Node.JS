var db = require('./db');

module.exports.handleSIgnup = (email, password) => {


    db.saveUser({email, password});

}
