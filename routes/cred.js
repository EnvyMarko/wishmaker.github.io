module.exports = function(req, res, next){
    const userLog = req.body.user_name;
    
    try {
        console.log('this is',userLog);
        next();
    } catch (error) {
        console.log(error);
    }
}