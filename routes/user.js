const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController=require("../controllers/users.js")

router.route("/signup")
// access signup page
.get(userController.renderSignupForm)
// actually sign up 
.post(wrapAsync(userController.signup))

router.route("/login")
// access login page
.get(userController.renderLoginForm)
// actually login up 
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.login)

router.get("/logout",userController.logout)

module.exports=router;