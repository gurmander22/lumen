import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,useUnifiedTopology: true}).then((data)=>{
        console.log('connected to db')
    }).catch((err) => {
        console.log(err)
    })
}
export default connectDatabase