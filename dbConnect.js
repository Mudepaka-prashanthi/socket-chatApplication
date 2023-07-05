const mongoose=require('mongoose')
const uri=process.env.ATLASURI
//connect to mongoDB atlas
mongoose.connect(uri)
.then(()=>console.log('connected to mongoDB'))
.catch(err=>console.log(err))