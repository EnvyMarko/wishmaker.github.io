const jwt = require('jsonwebtoken');
module.exports = function(req, res, next){
    const token = req.header('token')
    if(!token) return res.status(400).send('ACCESS DENIED')
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
        
    } catch (error) {
        res.status(404).send('SERVER ISSUE'+error);
    }
}