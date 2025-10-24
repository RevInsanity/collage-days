const { User } = require('../models')


const createUser = async (req, res) => {
    const { name, email, phonenumber, address } = req.body;
    try {
        const newUser = new User({ name, address, phonenumber, email });
        console.log("newUser", newUser)
        await newUser.save();
        res.status(200).json("user created successfully!")
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createUser,
    fetchUsers
}

