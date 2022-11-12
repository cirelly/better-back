const PostSchema = require('../models/post.models')


addPost  = async (req, res)=> {

       try {
              const post = PostSchema();
              const {title, description, category, author} = req.body;
              const image = 'https://picsum.photos/200/300?random=1'
              post.title = title;
              post.description = description;
              post.category = category;
              post.author = author;
              post.image = image;

              let savePost = await post.save();
              res.send({post: savePost});
       } catch (error) {
              res.status(500).send(error);
              throw error
       }
}

getPosts = async (req, res) => {
       try {
              const posts = await PostSchema.find()
              res.status(200).send({ data: posts})
             
          } catch (error) {
      
      
              console.log(error);
              res.status(500).send(error)
              throw error
          }
}



module.exports = {
    addPost,
    getPosts,
   
  };