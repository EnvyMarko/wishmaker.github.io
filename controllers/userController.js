const Wish = require('../models/Wish');
const user = require('../models/user');
const { search } = require('../routes/bookRoutes');
var userGlobal = '';


const user_board = (req, res) => { 
    const userLog = req.body.user_name;
    // const TempInfo = userLog;
    userGlobal = userLog;
    console.log('Dashboard: ',userGlobal);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('HomePage',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
const user_home = (req, res) => { 
    const userLog = req.body.userName;
    // const TempInfo = userLog;
    userGlobal = userLog;
    console.log('Dashboard: ',userGlobal);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('HomePage',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
const user_about = (req, res) => {  //About page
    const userLog = req.body.userName;
    // const TempInfo = userLog;
    userGlobal = userLog;
    console.log('Dashboard: ',userGlobal);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('AboutPage',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
const user_news = (req, res) => {  //News page
    const userLog = req.body.userName;
    // const TempInfo = userLog;
    userGlobal = userLog;
    console.log('Dashboard: ',userGlobal);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('NewsPage',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
// const user_dashboard = (req, res) => { 
//     const userLog = req.body.userName;
//     // const TempInfo = userLog;
//     author = userLog;

//     console.log('Dashboard: ',author);
//     Wish.find({author}).sort({createdAt: -1})
//     .then((result) => {
//         res.render('userBoard',{forUser: userLog, title: "Dashboard", wish: result})
//     })
//     .catch(err => console.log(err))
// }
const user_dashboard = (req, res) => { //
    const userLog = req.body.userName;
    // const TempInfo = userLog;
    author = userLog;

    console.log('Dashboard: ',author);
    Wish.find({author}).sort({createdAt: -1})
    .then((result) => {
        res.render('HomeGallery',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
// const user_post = (req, res) => { 
//     const userLog = req.body.userName;
//     // const TempInfo = userLog;
//     userGlobal = userLog;
//     console.log('Dashboard: ',userGlobal);
//     Wish.find().sort({createdAt: -1})
//     .then((result) => {
//         res.render('publicPost',{forUser: userLog, title: "Dashboard", wish: result})
//     })
//     .catch(err => console.log(err))
// }
const user_post = (req, res) => { 
    const userLog = req.body.userName;
    // const TempInfo = userLog;
    userGlobal = userLog;
    console.log('Dashboard: ',userGlobal);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('HomeGallery',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}


const user_toUpdate = async (req, res) => {
    const id = req.params.id;
    const userLog = req.body.userName;
    console.log('Gallery: ',userLog);
  let bookUpdate = await Wish.findByIdAndUpdate(id, {
        userName: req.body.userName,
        Wishitem: req.body.Wishitem,
        details: req.body.details,
        author: req.body.author,
        wishimg: req.body.wishimg
    });
    Wish.findById(id)
    .then((result) => res.render('userBoard', {forUser: userLog, wish: result, title: "Wish Detail"}))
    console.log(id)

    if(!bookUpdate) return res.status(404).send(`Book can't be updated`); 
}
const addPost = (req, res) => { 
    const userLog = req.body.userName;
    // const TempInfo = userLog;
    author = userLog;

    console.log('Dashboard: ',author);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('addPost',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
const user_addPost = (req, res) => {
    const userLog = req.body.userName;
    author = userLog;
    const wish = new Wish(req.body)
    wish.save()
    .then(result => res.render('HomePage', {forUser: userLog, wish: result, title: "Wish Detail"}))
    .catch(err => console.log(err))
}
const userDeletePost = async (req, res) => {
    const id = req.params.id;
    const userLog = req.body.userName;
    console.log('Gallery: ',userLog);
    
    const deleteWish = await  Wish.findByIdAndDelete(id)
//   if(!deleteWish){
//     return res.status(404).send(`Wish can't be deleted`);
//   }
    Wish.findById(id)
    .then((result) => res.render('publicPost', {forUser: userLog, wish: result, title: "Wish Detail"}))
    console.log(id);
    //res.redirect('/publicPost')
}
module.exports = {
    user_board,
    user_dashboard,
    user_post,
    user_toUpdate,
    user_addPost,
    addPost,
    userDeletePost,
    user_home,
    user_about,
    user_news
    
}