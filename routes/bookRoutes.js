const express = require('express');
const booksController = require('../controllers/booksController');
const verify = require('./auth');
const router = express.Router();

// Home Page / Get all
router.get("/", booksController.books_index)

// Admin Page / Get all
router.get("/login", booksController.books_login)

router.post("/login", booksController.books_admin)

router.get("/board", booksController.books_board)
router.get("/gallery", booksController.books_gallery)
router.get("/user", booksController.books_user)

// about / Get all
router.get("/about", booksController.books_about)

// search / Get all
router.post("/search", booksController.books_search)

// Find book
router.get("/books/:id", booksController.books_find)

// Delete book
router.delete('/books/:id', booksController.books_delete)

// Add book
router.post('/books', booksController.books_add)

router.get("/add", booksController.books_addPage)

// update user
router.get("/update/:id", booksController.books_update)

router.post('/update/:id', booksController.books_toUpdate)

module.exports = router;