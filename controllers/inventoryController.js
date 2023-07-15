const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//Create inventory
const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;
        //validation
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error('User not found')
        }
        if (inventoryType === 'in' && user.role !== 'donar') {
            throw new Error('Not a donar')
        }
        if (inventoryType === 'out' && user.role !== 'hospital') {
            throw new Error('Not a hospital')
        }
        //Save records
        const inventory = new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success: true,
            message:'New blood record added'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in create inventory API',
            error
        });
    }
}

//GET INVENTORY BLOOD RECORDS
const getInventoryController= async (req, res)=>{
    try {
        const inventory = await inventoryModel.find({organisation:req.body.userId}).populate('donar').populate('hospital').sor({ createdAt: -1});
        return res.status(200).send({
            success:true,
            message:"get all records successfully",
            inventory,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in Get All Blood Record Inventory'
        })
    }
}

module.exports = { createInventoryController, getInventoryController };