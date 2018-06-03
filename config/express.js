let express = require('express')
let bodyParser = require('body-parser')

let usuario_routes = require('../app/routes/usuario')
let post_routes = require('../app/routes/post')

module.exports = function(){
    let app = express();
    app.set('port', 8080)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    usuario_routes(app)
    post_routes(app)
    app.get('/api', function(req, res){
        res.status(201).send('deu certo')
    })
    return app
}