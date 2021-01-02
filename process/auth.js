eje = function (datos, db) {
    return new Promise(function (resolve, reject) {//ver modelo de valores a devolver: modules/models.js

        //datos.data_ : [name, pass] = arrays
        let arrays = datos._data_;
        let usu = '"' + arrays[0] + '"';
        let psw = '"' + arrays[1] + '"';

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
                reject([usu, 'undefined', 'no_connected'])
                return;
            } else {
                console.log('Conexión exitosa')
            }

        });

        //Realizar consulta
        connection.query(`SELECT id_persona FROM usuarios WHERE user_name = ${usu} AND psw = ${psw}`, function (error, results) {
            if (error) {
                reject([usu, 'datos no encontrados', JSON.stringify(error)])
            }
            else {
                if (JSON.parse(JSON.stringify(results))[0] === undefined) {
                    reject([usu, 'Consulta indefinida', 'Datos no encontrados'])
                } else {
                    resolve([usu, JSON.parse(JSON.stringify(results))[0]['id_persona'], 'success'])
                }

            }

        });

        connection.end()

    });
};

module.exports = eje;
