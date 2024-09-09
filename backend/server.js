const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const PORT = 5000;
const cors = require('cors');

require('dotenv').config()




const app = express();
app.use(cors());
// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.json())   
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

//mongodb connection
mongoose.connect('mongodb://localhost:27017/Ecommerce')
const db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING...")
})

//routee
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))
