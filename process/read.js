eje = function (datos, db) {
    return new Promise(function (resolve, reject) {//ver modelo de valores a devolver: modules/models.js

        //datos.data_ : [name, email, pass, passw] = arrays
        var arrays = datos._data_;
        var msj_resp = '';

        console.log(`datos a consultar usuario ${arrays[0]} con psw ${arrays[1]}`)
        var connection = db.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'main_10001'
        });

        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                reject([arrays, 'reject'])
                return;
            }
            console.log('connected as id ' + connection.threadId);
            resolve([arrays, 'success'])
        });

    });
};

module.exports = eje;
