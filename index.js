try {
    let database_serve = null;
    var WebSocketServer = require("ws").Server,
        http = require("http"),
        express = require("express"),
        app = express(),
        port = process.env.PORT || 8002,
        cors = require('cors');
    app.use(cors({
        origin: true,
        credentials: true
    }));
    app.options('*', cors());

    app.get('/reset', function (req, res) {
        res.statusCode = 200;
        res.end('Reset active');
    });
    var server = http.createServer(app)
    server.listen(port);

    console.log("init in port %d", port)

    var wss = new WebSocketServer({ server: server })

    wss.options.maxPayload = 512 * 1024;
    wss.options.server.timeout = 120000;
    wss.options.server.keepAliveTimeout = 5000;



    //conexión websocket
    try {
        wss.on("connection", function (ws, req) {
            ws.on('message', function incoming(data2) {
                //session:
                ////epera retornar { "error_": boolean, "resp_": [obj] }
                try {
                    var datos = JSON.parse(data2);
                    console.log("Proceso a ejecutar: ", datos.process_)

                    var ejecucion = require('./process/' + datos.process_ + '');
                    ejecucion(datos, database_serve).then(function (info) {
                        ws.send(JSON.stringify({ "error_": false, "resp_": info }));
                    }).catch(function (err) {
                        ws.send(JSON.stringify({ "error_": true, "resp_": err }));
                    });

                } catch (e) {
                    ws.send(JSON.stringify({ "error_": true, "resp_": e }));//retorna
                }
            });
        });

    } catch (error) {
        console.log('conexión rota')
    }
} catch (error) {
    console.log('backend OFF')
}
