const { default: SetAvatar } = require("../../public/src/pages/SetAvatar");
const {register} = require("../controllers/usersController");
const {login} = require("../controllers/usersController");

const router = require('express').Router();

router.post('/register',register);
router.post('/login',login);
router.post('/setAvatar/:id',SetAvatar);



module.exports = router;