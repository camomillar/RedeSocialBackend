let http = require('http')
let config_express = require('./config/express')
let db = require('./config/database')

let app = config_express()
http.createServer(app)
    .listen(app.get('port'), function(){
        console.log('Server running')
    })

db('mongodb://localhost:27017/provapiw2')