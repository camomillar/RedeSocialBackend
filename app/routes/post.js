let post = require('../controllers/post')

module.exports= function(app){
    app.get('/api/posts', post.getPosts)
    app.get('/api/posts/:id', post.getPostById)
    app.post('/api/posts', post.inserirPost)
    app.put('/api/posts/:id', post.updatePostById)
    app.delete('/api/posts/:id', post.removePostById)
}