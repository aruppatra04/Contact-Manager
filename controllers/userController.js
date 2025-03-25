const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { use } = require('../routes/contactsRoutes');
// const { use } = require('../routes/userRoutes');

// @desc Register a user :
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || ! password){
        res.status(400);
        throw new Error("All fields are mendatory");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    //  hash password :
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if(user) {
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else{
        res.status(400);
        throw new Error("User data is not valid"); 
    }
    res.json({ message: "Resgister successfull !" });
});

// @desc Login a user :
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mendatory");
    }
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))){
        const accessTocken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                }, 
            }, 
            process.env.ACCESS_TOCKEN_SECERT,
            { expiresIn: "1h"} 
        );
        res.status(200).json({ accessTocken });
    }
    else{
        req.status(401);
        throw new Error("Email or password is not valid");
    }
});

// @desc Current a user info :
// @route GET /api/user/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
};