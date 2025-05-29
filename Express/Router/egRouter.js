const express = require('express')
const router =express.Router()
const {getRoute,postRoute} = require('../controllers/egController')
router.get('/get',getRoute)
router.post('/post',postRoute)
/*router.get('/',(req,res)=>{
    res.json({
        message:"Get request working"
    })
})*/

module.exports=router