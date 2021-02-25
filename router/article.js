const express = require('express');
const router = express.Router()


router.get('/articles' , (req , res)=>{
    res.send('get all')
    res.send(req.params.id)
});
router.get('/article/:2', (req , res)=>{
    res.send('get single')
    res.send(req.body)

});
router.post('/article', (req , res)=>{
    res.send('creat')
});
router.delete('/article', (req , res)=>{
    res.send('delete')
});
router.put('/article', (req , res)=>{
    res.send('update')
})

module.exports = router;