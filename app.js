const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
//const bookRoutes = require('./routes/bookRoutes');
const wishRoutes = require('./routes/wishRoutes');
const methodOverride = require('method-override');
const routerLogin = require('./routes/login');

// express app
dotEnv.config();
const app = express();

// "mongodb+srv://exampleTest:<password>@cluster0.hzacp.mongodb.net/ANOTHER?retryWrites=true&w=majority"
// mongodb connection
//const db = "mongodb+srv://MayumiAtMakisig:<password>@cluster0.pavi3mu.mongodb.net/?retryWrites=true&w=majority";
var port = 4000;
// mongoose.connect(process.env.DB_CONNECT)
//     .then(result => // Listen for request
//     app.listen(port, (err) => {
//         if (!err){
//             console.log('database connection is working')
//             console.log(`$Listening to port ${port}`);
//         } 
//     }))
//     .catch(err => console.log(err));

// view engine
// configure some application setting
app.set('view engine', 'ejs');
// views folder is the default value the of the express and ejs to look for
// different configuration setting for another folder
// first param which is the default "views", second param name of your folder
app.set('views', 'views');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// app.use((req,res, next) =>{
//     // console.log("request has been made");
//     console.log("host", req.hostname);
//     console.log("path", req.path);
//     // console.log("method", req.method);
//     next();
// })

// Book Routes
app.use('/', wishRoutes);
app.use('/login', routerLogin);

//checking connection 
mongoose.connect(process.env.DB_CONNECT, ()=>{
    console.log('database connection is working')
    });
    
app.listen(port, ()=>{
    console.log(`server is now running in port:${port}`)
});

// If there is no path as the user requested
// USE going to fire this function for every incoming request regardless of the url specifically if there is no match
// must be on bottom since it fires in every request
app.use((req, res) =>{
    res.status(404).render('404',{title: "Page not found"});
})


