const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
const port = 3000

const userSchema= new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
})

const User = mongoose.model("User", userSchema);

mongoose.connect('mongodb+srv://singh0369aman:Amansingh0369@aman.6sexufp.mongodb.net/notesApp', { useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/signup', async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(403).json({
            message: "user already Exists"
        })
    }
    else{
        const newuser = new User(req.body);
        await newuser.save();
        res.json({
            message: "User created successfully",
        })
    }
});

app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if(user){
        res.json({
            message: "Logged in successfully",
        })
    }
    else{
        res.status(403).json({ message: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log("Example app listening on port 3000")
})