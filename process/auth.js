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

        //conexion a base de datos
        /* Logica
        stage 1: 
            si error de conexion db -> reject(no se pudo conectar a base de datos)
        stage 2:
            si error de consulta -> resolve(Error de consulta)
        stage 3:
            si datos erroneos -> resolve(datos no encontrados)
        stage 4:
            si datos encontrados -> resolve(Bienvenido al administardor de SG-SST)

        */

        connection.connect(function (err) {
            //si ocurre error en conexion
            if (err) {
                console.error('error connecting: ' + err.stack);
                reject([usu, 'No se pudo conectar a base de datos', 'error'])
                return;
            } else {
                console.log('Conexión exitosa')
            }

        });

        //Realizar consulta
        connection.query(`SELECT id_persona, clave_seguridad FROM usuarios WHERE user_name = ${usu} AND psw = ${psw}`, function (error, results) {
            if (error) {
                resolve([usu, 'Error de consulta', JSON.stringify(error)])
            }
            else {
                if (JSON.parse(JSON.stringify(results))[0] === undefined) {
                    resolve([usu, 'Datos no encontrados', false])
                } else {
                    resolve([JSON.parse(JSON.stringify(results))[0]['id_persona'], 'Bienvenido al administardor de SG-SST', true])
                }
            }

        });

        connection.end()

    });
};

module.exports = eje;
