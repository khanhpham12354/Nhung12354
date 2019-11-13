const mongoose = require('mongoose');
const response = require('../../base/response');
const Information = require('../information/models/info');
const gateway = require('../../../../config/seeds').gateway;

async function getSeeds(req, res){
    try {
        let seeds = await mongoose.models['farm_seeds'].find({}).distinct("seed");
        response.ok(res, seeds)
    }catch (err) {
        response.internal(res, err)
    }
}

async function getSensor(req, res){
    try{
        let gate = gateway;
        let subs = await Information.find({}).distinct("sub_id");
        for(let i=0;i<subs.length;i++){
            gate = gate.filter(item => item !== subs[i])
        }
        response.ok(res, gate)
    }catch(err){
        response.internal(res, err)
    }
}


module.exports={
    getSeeds,
    getSensor
};