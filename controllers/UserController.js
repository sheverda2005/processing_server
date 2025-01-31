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
        if (user.password === password) {
            res.status(200).json(user)
        } else  {
            res.status(401).json({message: 'Incorrect password'})

        }
    }

}


module.exports = new UserController()