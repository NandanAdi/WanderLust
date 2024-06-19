const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js")
const Listing= require("../models/listing")
const {isLoggedIn,isOwner,validateListing}= require("../middleware.js")


const listingController=require("../controllers/listing.js")
const multer  = require('multer')
const{storage}=require("../cloudConfig.js")
const upload = multer({ storage })


// New way of writing
// for("/")
router.route("/")
// index
.get(wrapAsync(listingController.index))
// create 
.post(isLoggedIn,upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing));



//Index Route
// router.get("/", wrapAsync(listingController.index));


//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

// for("/:id")
router.route("/:id")
// Show
.get( wrapAsync(listingController.showListing))
// Update 
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
// delete
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))


//Show Route
// router.get("/:id", wrapAsync(listingController.showListing))


  //Create Route
  // router.post("/",isLoggedIn,validateListing, wrapAsync(listingController.createListing))


  //Edit Route
  router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));


//Update route
// router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing))


//Delete Route
// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

module.exports=router;