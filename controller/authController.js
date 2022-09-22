const Admin = require('../models/admin')
const bcryptjs = require('bcryptjs')
// admin login system
const adminLogin = async (req, res) =>{

    const {email, password} = req.body;

    // check user by email and password
    const loginData = await Admin.findOne({email});

    if (loginData) {

        if (await bcryptjs.compare(password, loginData.password)) {
            res.status(200).json({
                message : "admin login success."
            })
        } else {
            res.status(400).json({
                message : "Incurrent Password!"
            })
        }

    } else {
        res.status(400).json({
            message : "Incurrent E-mail address!"
        })
    }

    

}

module.exports = {
    adminLogin
}