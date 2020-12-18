eje = function (datos, db) {
    return new Promise(function (resolve, reject) {//ver modelo de valores a devolver: modules/models.js

        //datos.data_ : [name, email, pass, passw] = arrays
        var arrays = datos.data_;
        var msj_resp = '';
        var coment = /^[A-Za-z0-9\-\_\.\;\#\$\%\s]{0,100}/;
        var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

        console.log(datos, ': ', db)
        resolve([datos,'retornado'])
    });
};

module.exports = eje;
