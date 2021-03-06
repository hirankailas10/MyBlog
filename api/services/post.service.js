const Post = require('../models/post.model');
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/MyBlog');
const connector = mongoose.connect("mongodb+srv://mottu:mottu@myblog-wtlpn.mongodb.net/mottu?retryWrites=true&w=majority",{ useNewUrlParser: true });
connector.then(result =>{
    console.log('connected to mongodb');
}).catch(ex=>{
    console.log(ex);
})

exports.GetAllPosts = async function(req,res,next){
    var posts = await Post.find({});
    return posts;
};

exports.PostDataById = async function(req,res,next){
    var post = await Post.findById(req.params.id);
    return post;
};

exports.SavePost = async function(req,res,next){
     Post.create({
        userName:req.body.userName,    
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        }).then(result=>{
            console.log(result);
            return true;
        }).catch(err=>{
            console.log(err);
            return false;
    });


};
