const routerLogin = require('express').Router();
const User = require('../models/user');
const validationReg = require('../controllers/validation');
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config');

routerLogin.post('/', async (req, res)=>{
//validate login inputs
const {error} = validationReg(req.body);
if(error) return res.status(400).send(error.details[0].message);
//check if the username and pass is match
// const user = await User.findOne({email: req.body.email})
// if(!user) return res.status(400).send("Username Not Match")
const userPass = await bcyrpt.compare(req.body.password, user.password)
if(!userPass) return res.status(400).send("Password Not Match")
//create token 
const token = jwt.sign({name: user.name}, process.env.TOKEN_SECRET);
res.header('token', token).send(token)
})
module.exports = routerLogin