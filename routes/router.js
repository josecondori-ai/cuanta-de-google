const passport = require('passport')

const router = require('express').Router()


router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/logout',(req,res)=>{
    res.send('deslogueado')
})

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('fuiste redirigido')
})

module.exports=router