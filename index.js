const express = require('express');
const misrutas=require('./routes/router')
const app = express();
const autorizo=require('./configuracion/passport')


app.set('view engine', 'ejs');

app.use('/autorizo',misrutas)



app.get('/',(req,res)=>{
    res.render('inicio')
})

app.listen(3001,()=>{
 console.log('FUNCIOONA')
})