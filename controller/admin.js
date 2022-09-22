const admin = require("../models/admin")
const bcryptjs = require('bcryptjs')


const getAllAdmin = async (req, res) =>{
    try {
        const allAdmins = await admin.find()
        res.status(200).json(allAdmins)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Admin data not found"
        })
    }
    
}
const getSingleAdmin = async (req, res) =>{
    try {
        let id = req.params.id;
        const allAdmins = await admin.findById(id)
        res.status(200).json(allAdmins)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Admin data not found"
        })
    }
}
const deleteAdmin = async (req, res) =>{
    try {
        let id = req.params.id;
        const allAdmins = await admin.findByIdAndDelete(id)
        res.status(200).json({
            message : 'delete data success'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Admin data not found"
        })
    }
}
const addAdmin = async (req, res) =>{
    try {
        let allData = req.body;

        // hase password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(allData.password, salt)
         await admin.create({
            ...allData,
            password : hashPassword,
         })
        res.status(200).json({
            message : 'add admin success'
        })
    
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "get error"
        })
    }
}

const updateAdmin = async (req, res) =>{
    try {
        let id = req.params.id;
        let allData = req.body;

        // make salt password
        const salt = await bcryptjs.genSalt(10);
        const hasPassword = await bcryptjs.hash(allData.password, salt)
        const allAdmins = await admin.findByIdAndUpdate(id, {
            ...allData,
            password : hasPassword
        }, {
            new : true
        })
        res.status(200).json({
            message : 'edit data success'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Admin data not found"
        })
    }
}

module.exports = {getAllAdmin, getSingleAdmin, deleteAdmin, addAdmin, updateAdmin}