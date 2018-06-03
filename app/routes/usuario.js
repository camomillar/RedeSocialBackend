let usuario = require('../controllers/usuario')

module.exports= function(app){
    app.get('/api/usuarios', usuario.getUsuarios)
    app.get('/api/usuarios/:id', usuario.getUsuarioById)
    app.post('/api/usuarios', usuario.inserirUsuario)
    app.put('/api/usuarios/:id', usuario.updateUsuarioById)
    app.delete('/api/usuarios/:id', usuario.removeUsuarioById)
}