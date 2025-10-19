const UserModel = require("../models/UserModel");

class UserController {
    async addUser(req, res, next) {
        const {name, password, balance, surName, frozen_balance, login, telegram, email, phone} = req.body
        const user = new UserModel({name, password, balance, surName, frozen_balance, login, telegram, email, phone})
        await user.save()
        return res.json(user)
    }
    async checkUser(req, res, next) {
        const {email, password} = req.body
        const user = await UserModel.findOne({email: email})
        console.log(password == user.password)
        if (user.password == password) {
            res.status(200).json(user)
        } else  {
            res.status(401).json({message: 'Incorrect password'})

        }
        res.json({message: "ok"})
    }

}


module.exports = new UserController()