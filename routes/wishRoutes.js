const express = require('express');
const wishController = require('../controllers/wishController');
const userController = require('../controllers/userController')
const cred = require('./cred')
const verify = require('./auth');
const router = express.Router();

// Home Page / Get all
router.get("/", wishController.wish_index)

// Admin Page / Get all
router.get("/login", wishController.wish_login)
router.post("/login/", wishController.wish_admin)
router.get("/admin/", wishController.log_admin)
router.post("/board", wishController.wish_board)
router.post("/gallery", wishController.wish_gallery)
router.post("/user", wishController.wish_user)
router.post("/addUser", wishController.wish_addUser)

//User interaction
router.post("/Home", userController.user_home)
router.post("/About", userController.user_about)
router.post("/News", userController.user_news)
router.post("/userLogin", userController.user_board)
router.post("/userDashBoard", userController.user_dashboard)
router.post("/userPost", userController.user_post)
router.post("/userUpdate/:id", userController.user_toUpdate)
router.post("/addPost/", userController.addPost)
router.post("/userWish/", userController.user_addPost)
router.delete("/userDeletePost/:id", userController.userDeletePost)

// about / Get all
router.get("/about", wishController.wish_about)

// search / Get all
router.post("/search", wishController.wish_search)

// Find book
router.get("/wish/:id", wishController.wish_find)

// Delete book
router.delete('/wish/:id', wishController.wish_delete)

// Add book
router.post('/wish', wishController.wish_add)

router.post("/add", wishController.wish_addPage)

// update user
router.get("/update/:id", wishController.wish_update)

router.post('/update/:id', wishController.wish_toUpdate)

module.exports = router;