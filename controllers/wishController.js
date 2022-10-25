const Wish = require('../models/Wish');
const user = require('../models/user');
const { search } = require('../routes/bookRoutes');
var userGlobal = '';

const wish_index = (req, res) => {
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('HomeSignIn',{ title:"Home", wish: result})
    })
    .catch(err => console.log(err))
}
const log_admin = (req, res) => {
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminSignIn',{ title:"Home", wish: result})
    })
    .catch(err => console.log(err))
}
const wish_user = (req, res) => {
    const userLog = req.body.userName;
    console.log('User: ',userLog);
    user.find().sort({createdAt: -1})
    .then((result) => {
        res.render('wishUser',{forUser: userLog, title:"User's", user: result})
    })
    .catch(err => console.log(err))
}
const wish_addUser = (req, res) => {
    const userLog = req.body.userName;
    console.log('User: ',userLog);
    const wish = new user(req.body)
    wish.save()
    .then(result => res.render('HomeSignIn',{forUser: userLog, title:"User's", user: result}))
    .catch(err => console.log(err))
}
const wish_login = (req, res) => {
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('HomeSignIn',{title:"Admin", wish: result})
    })
    .catch(err => console.log(err))
}
const wish_admin = (req, res) => { //.POST
    const userLog = req.body.user_name;
    // const TempInfo = userLog;
    userGlobal = userLog;
    console.log('Dashboard: ',userGlobal);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminBoard',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}

const wish_board = (req, res) => { //.GET
    const userLog = req.body.userName;
    console.log('Dashboard: ',userLog);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminBoard',{forUser: userLog, title: "Dashboard", wish: result})
    })
    .catch(err => console.log(err))
}
const wish_gallery = (req, res) => {
    const userLog = req.body.userName;
    console.log('Gallery: ',userLog);
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminGallery',{forUser: userLog, title:"Gallery", wish: result})
    })
    .catch(err => console.log(err))
}
const wish_about = (req, res) => {
    Wish.find().sort({createdAt: -1})
    .then((result) => {
        res.render('about',{title:"about", wish: result})
    })
    .catch(err => console.log(err))
}
//search area
const wish_search = async (req, res) => {
    let title = req.body.title;
    let search = await Books.find(
        {
            "$or":[
                {title:{$regex:title}}
                ]
        }
    )
    // console.log(search);
    //res.send(search);
    res.render('search',{title:"Search", books: search});
    
}
const wish_find = (req,res) => {
    const id = req.params.id;
    Wish.findById(id)
    .then((result) => {
        res.render('wishFind', {wish: result, title: "Wish Detail"})
        //console.log(result)
    })
    .catch(err => console.log(err))
}
const wish_add = (req, res) => {
    // console.log(req.body);
    const wish = new Wish(req.body)
    wish.save()
    .then(result => res.render('wishAdd', {wish: result, title: "Wish Detail"}))
    .catch(err => console.log(err))
}

const wish_update = (req, res) => {
    const id = req.params.id;
    Wish.findById(id)
    .then((result) => {
        res.render('wishUpdate', {wish: result, title: "Wish Detail"})
    })
    .catch(err => console.log(err))
}

const wish_toUpdate = async (req, res) => {
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
    .then((result) => res.render('adminBoard', {forUser: userLog, wish: result, title: "Wish Detail"}))
    console.log(id)

    if(!bookUpdate) return res.status(404).send(`Book can't be updated`);
    
    
}

const wish_delete = async (req, res) => {
    const id = req.params.id;
    const userLog = req.body.userName;
    console.log('Gallery: ',userLog);
    console.log(id);
  const deleteWish = await  Wish.findByIdAndDelete(id)
  if(!deleteWish){
    return res.status(404).send(`Wish can't be deleted`);
  }else {
  Wish.findById(id)
    .then((result) => res.render('adminBoard', {forUser: userLog, wish: result, title: "Wish Detail"}))
    console.log(id)
//   res.redirect('/adminBoard')
  }
}

// const books_delete = async (req, res) => {
//     try {
//     const id = req.params.id;
//   const deleteBook = await  Books.findByIdAndDelete(id);
//   if(!deleteBook) return res.status(404).send('Book not found')
//   res.redirect('/')
// } catch (error){
//     res.status(400).send(error.message);
// }
// }

const wish_addPage = (req, res) =>{
    const userLog = req.body.userName;
    console.log('Add wish',userLog);
    res.render('wishAdd', {forUser: userLog, title: "Add Wish"});
}


module.exports = {
    wish_index,
    wish_find,
    wish_update,
    wish_toUpdate,
    wish_delete,
    wish_add,
    wish_addPage,
    wish_about,
    wish_search,
    wish_admin,
    wish_board,
    wish_gallery,
    wish_login,
    wish_user,
    wish_addUser,
    log_admin
    
}