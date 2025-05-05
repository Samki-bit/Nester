import express from 'express';
const router = express.Router();
import User from '../models/users.js';
import bcrypt from "bcrypt";

router.post('/signup', async (req, res) => {
    try {
        const hashedPw = await bcrypt.hash(req.body.password, 10);

        const userData = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPw,
            username: req.body.username
        })

        await userData.save();
        res.send('signedup')

    } catch (err) {

        console.log(err);

    }

})

export default router;