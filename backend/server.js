import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signUp from './routes/signup.js'
import logIn from './routes/login.js'
dotenv.config();
app.use(express.json())

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(()=>{
  console.log('DB connected')
}).catch(()=>{
  console.log('err')
})

app.get('/', (req, res) => {
  res.send('Sup Nester');
});

app.use('/auth', signUp);
app.use('/auth', logIn);

app.listen(3000, () => {   
    console.log('Server is running on port 3000');
    }
);