const passport=require('passport')

const estrategiaGoogle=require('passport-google-oauth20').Strategy
const keys = require('./keys')

passport.use(
    new estrategiaGoogle({
        callbackURL:'/autorizo/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accesToken,refreshToken,profile,done)=>{
        console.log(profile.id)
        console.log(profile.displayName)
        console.log(profile.photos[0].value)


    })
)