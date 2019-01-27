const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo', {useNewUrlParser: true});

// POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model('Post', postSchema);

// UESR - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
const User = mongoose.model('User', userSchema);

// const newUser = new User({
//   email: 'hermione@hogwarts.edu',
//   name: 'Hermione Granger'
// });

// newUser.posts.push({
//   title: 'How to bre polyjuice potion',
//   content: 'Just kidding. Go to potions class to learn it!'
// });

// newUser.save((err, user) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

User.findOne({name: "Hermione Granger"}, (err, user) => {
  if(err) {
    console.log(err);
  } else {
    user.posts.push({
      title: '3 things i really hate',
      content: 'Voldemort. Voldemort. Voldemort'
    });
    user.save((err, user) => {
      if(err){
        console.log(err)
      } else {
        console.log(user)
      }
    })
  }
})