// import express
const express = require('express');
const BASE_URL = process.env.BASE_URL

//importing router
const userRouter = require('./routers/userRouter');
const blogRouter = require('./routers/blogRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');

//initialize express app
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

app.use(cors({
    origin: [ {BASE_URL}]
}));

app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

// routes 
app.get('/',(req, res) => {
    res.send('Response from express');
});
//add
app.get('/add',(req, res) => {
    res.send('Response from add');
});
//getall
app.get('/getall',(req, res) => {
    res.send('Response from getall');
});
//delete
app.get('/delete',(req, res) => {
    res.send('Response from delete');
});

app.listen( port, () => {
    console.log('express server started');
});