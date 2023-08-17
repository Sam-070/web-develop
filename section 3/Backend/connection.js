const mongoose = require('mongoose');

const url = "mongodb+srv://samanabid:sam123@cluster0.7jrol38.mongodb.net/mydb?retryWrites=true&w=majority";

// asynchronous function - return a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;