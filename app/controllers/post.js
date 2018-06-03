let Usuario = require('../models/usuario')
let Post = require('../models/post')

module.exports.inserirPost = function(req ,res){

    let post = {
        texto: req.body.texto,
        uid: req.body.uid
    }
    let promise = Post.create(post)
    promise.then(
        function(post){
            res.status(201).json(post)
        }

    ) 
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}

module.exports.getPosts = function(req, res){
    let promise = Post.find()
    promise.then(
        function(posts){
            res.status(201).json(posts)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.getPostById = function(req, res){
    let id = req.params.id
    let promise = Post.findById(id)
    promise.then(
        function(post){
            res,status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.removePostById = function(req, res){
    let id = req.params.id
    let promise = Post.findByIdAndRemove(id)
    peomise.then(
        function(post){
            res.status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.updatePostById = function(req, res){
    let id = req.params.id
    let post ={
        texto: req.body.texto,
        likes: req.body.likes
    }
    let promise = Post.findByIdAndUpdate(id)
    promise.then(
        function(post){
            res,status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}