const express = require('express');
const router = express.Router();
const BebidaModel = require('../models/bebidas.model')

router.get("/getallbebidas", async(req, res)=>{
    try{
        const bebidas = await BebidaModel.find({})
        res.send(bebidas)
    } catch(error){
        return res.status(400).json({message: error});
    }
});

module.exports = router;