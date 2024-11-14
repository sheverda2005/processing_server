const { Router } = require("express");
const router = Router()
const UserController = require("../controllers/UserController.js");


router.post("/addUser", UserController.addUser);

router.post('/checkUser', UserController.checkUser);



module.exports = router;