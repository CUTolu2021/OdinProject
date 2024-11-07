const {Router} = require('express');
const mainRoute = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    { href: "new", text: "New Message" }
  ];
const users = ["Rose", "Cake", "Biff"];


mainRoute.get('/', (req, res) => {
    res.render("index", {
        links: links,
         users: users, 
        messages: messages 
    });
});
mainRoute.get('/new',(req, res) => {
    res.render("form")
    });

mainRoute.post('/new', async(req, res) => {
    try{
        const name = req.body.name;
        const message = req.body.message;
        messages.push({user:name, text:message, added: new Date()});
        res.redirect('/')
    }catch(err){
        console.log(err);
    }
    
});

// const path = "C:/Users/omoni/Documents/RoadTOFullStack/OdinProject"
// // app.js

  
// mainRoute.get('/', (req, res) => {
//     res.render("index", { links: links, users: users });
//   });
// mainRoute.get('/about', (req, res) => {
//     res.sendFile(path + '/about.html');
// });
// mainRoute.get('/contact', (req, res) => {
//     res.sendFile(path + '/contact-me.html');
// });
// mainRoute.post('/contact', (req, res) => {
//     res.send("Author: " + id);
// });

module.exports = mainRoute;


// function narcissistic(value) {
//     let sum = 0;
//     let arrNum = value.toString.split('');
//     arrNum.forEach((number) => {
//       sum += Math.pow(number, arrNum.length)
//     })
//   return (sum === value)
//     // Code me to return true or false
//   }

// function isValidWalk(walk) {
//     if(walk.length === 10) {
//         if(walk.filter((item) => item === 'n').length === walk.filter((item) => item === 's').length && walk.filter((item) => item === 'e').length === walk.filter((item) => item === 'w').length) {
//             return true
//         }
//     }
//     return false
//   }

// function isValidWalk(walk) {
//     let n = 0,s=0,e=0,w=0;
//     if(walk.length === 10){
//       for(let i = 0; i<10;i++){
//         if(walk[i] === 'n'){
//           n++
//         }
//         else if(walk[i] === 's'){
//           s++
//         }
//         else if(walk[i] === 'e'){
//           e++
//         }
//         else if(walk[i] === 'w'){
//           w++
//         }
//       }
//       if(n === s && e === w)
//         return true
//     }
//     else 
//       return false
//   }
// console.log(isValidWalk(['n', 'n', 'e', 'e', 's', 'w']))    // true
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e','o']))    // false
  