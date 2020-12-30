eje = function (datos, db) {
    return new Promise(function (resolve, reject) {//ver modelo de valores a devolver: modules/models.js

        //datos.data_ : [name, pass] = arrays
        let arrays = datos._data_;
        let usu = arrays[0];
        let psw = arrays[1];

        console.log(`datos a consultar usuario ${usu} con psw ${psw}`)

        //Referencia conexion a base de datos
        var connection = db.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'main_10001'
        });

        //coexion a base de datos
        connection.connect(function (err) {
            //si ocurre error en conexion
            if (err) {
                console.error('error connecting: ' + err.stack);
                reject([usu, 'no_connected'])
                return;
            } else {
                //si no ocurre error en conexion
                if (!err) {
                    console.log('connected as id ' + connection.threadId);

                    //define consulta

                    //ejecutar cosulta
                    connection.query("SELECT id_persona FROM usuarios WHERE user_name = 'EricMartAc' AND psw = 'Rouse2017*'", function (err, result) {
                        if (err) {
                            reject([usu, result])
                        }
                        if (!err) {
                            resolve([usu, 'auth_success'])
                        } else {
                            reject([usu, 'undefined_002'])
                        }
                    });


                } else { // si hay problemas del sistema
                    reject([usu, 'undefined_001'])
                }
            }

        });

        connection.end()

    });
};

module.exports = eje;
