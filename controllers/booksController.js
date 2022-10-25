const Books = require('../models/Books');
const user = require('../models/user');
const { search } = require('../routes/bookRoutes');

const books_index = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index',{title:"Home", books: result})
    })
    .catch(err => console.log(err))
}
const books_user = (req, res) => {
    user.find().sort({createdAt: -1})
    .then((result) => {
        res.render('user',{title:"User's", user: result})
        console.log(result)
    })
    .catch(err => console.log(err))
}
const books_login = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminSignIn',{title:"Admin", books: result})
    })
    .catch(err => console.log(err))
}
const books_admin = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminBoard',{title:"Admin", books: result})
    })
    .catch(err => console.log(err))
}
const books_board = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminBoard',{title:"Dashboard", books: result})
    })
    .catch(err => console.log(err))
}
const books_gallery = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('adminGallery',{title:"Gallery", books: result})
    })
    .catch(err => console.log(err))
}
const books_about = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('about',{title:"about", books: result})
    })
    .catch(err => console.log(err))
}
//search area
const books_search = async (req, res) => {
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
const books_find = (req,res) => {
    const id = req.params.id;
    Books.findById(id)
    .then((result) => {
        res.render('find', {books: result, title: "Book Detail"})
        console.log(result)
    })
    .catch(err => console.log(err))
}



const books_add = (req, res) => {
    // console.log(req.body);
    const book = new Books(req.body)
    book.save()
    .then(result => res.redirect("/gallery"))
    .catch(err => console.log(err))
}

const books_update = (req, res) => {
    const id = req.params.id;
    Books.findById(id)
    .then((result) => {
        res.render('update', {book: result, title: "Book Detail"})
    })
    .catch(err => console.log(err))
}

const books_toUpdate = async (req, res) => {
    let id = req.params.id;

  let bookUpdate = await Books.findByIdAndUpdate(id, {
        title: req.body.title,
        order: req.body.order,
        completed: req.body.completed,
        author: req.body.author,
        url: req.body.url
    })

    if(!bookUpdate) return res.status(404).send(`Book can't be updated`);
    res.redirect('/')
    
}

const books_delete = async (req, res) => {
    const id = req.params.id;
    console.log(id);
  const deleteBook = await  Books.findByIdAndDelete(id)
  if(!deleteBook){
    return res.status(404).send(`Book can't be deleted`);
  }
  res.redirect('/home')
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

const books_addPage = (req, res) =>{
    res.render('add', {title: "Add Book"});
}


module.exports = {
    books_index,
    books_find,
    books_update,
    books_toUpdate,
    books_delete,
    books_add,
    books_addPage,
    books_about,
    books_search,
    books_admin,
    books_board,
    books_gallery,
    books_login,
    books_user
    
}