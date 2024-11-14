const { Schema, model } = require("mongoose");


const userModelCrypto = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    balance: { type: Number, required: false, default: 0 },
    surName: { type: String, required: true },
    login: { type: String, required: true },
    telegram: { type: String, required: true },
    frozen_balance: { type: Number, required: false, default: 0 },
})

module.exports = model("UserModelCrypto", userModelCrypto)