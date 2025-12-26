import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();
const port = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;
//Connect to mongodb
try {
    mongoose.connect(MONGODB_URL)
    console.log("Connect to Mongodb successfully..");
    
} catch (error) {
    console.log('Error',error);
       
}

app.use('/book',bookRoute)
app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
