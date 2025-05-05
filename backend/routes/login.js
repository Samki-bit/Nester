import express from 'express';
const router = express.Router();
import User from '../models/users.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

router.post('/login', async (req, res) => {
    
    const loginUser = await User.findOne({ username: req.body.username });
    const hashedPw = loginUser.password;
    if (loginUser == null) {
        res.json({
            error: "User with that username doesnt exist"
        })
    } else {
        if (await bcrypt.compare(req.body.password, hashedPw)) {
            const authenticatedUser = {
                username : loginUser.username
            }
            const accessToken = jwt.sign(authenticatedUser, process.env.ACCESS_TOKEN_SECRET)
            res.json({
                accessToken : accessToken
            })
        }
        else {
            res.json({
                error: "password doesnt match"
            })
        }
    }


})

export default router;