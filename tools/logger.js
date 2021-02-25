
//trick
function logger1(req, res, next) {
    console.log(req.url);
    next();
}
//>

module.exports=logger1