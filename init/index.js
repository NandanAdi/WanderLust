const mongoose=require("mongoose");
const initData=require("./data.js")
const Listing=require("../models/listing.js")

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect(MONGO_URL)
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj, owner:"66699166e3311a607b09147e"}))
    await Listing.insertMany(initData.data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log("data was initialized");
};

initDB()