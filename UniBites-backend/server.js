const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config()


app.use(cors());

 
app.use(express.json());


app.use(express.urlencoded({extended: false}));





const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
