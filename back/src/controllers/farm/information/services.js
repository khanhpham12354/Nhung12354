const mongoose = require('mongoose');
const response = require('../../base/response');
const Information = require('./models/info');
const User = require('../../user/models/users');
const Seed = require('../seeds/models/seeds');
const serializer = require('../../base/serializer');
const lodash = require('lodash');

const gateway = require('../../../../config/seeds').gateway;

/** Get some info of farms*/
async function getSubstation(req, res) {
    try{
        let full_infos = [];
        let farms = req.user.farms;
        for(let i=0;i<farms.length;i++){
            let info = await Information.findOne({sub_id: farms[i]});
            if(info) full_infos.push(await serializer.convertOutput(info))
        }
        response.ok(res, full_infos);
    }catch(err){
        return response.internal(res, err)
    }
}

/** Get information of farm*/
async function getSubById(req, res) {
    try{
        let info = await Information.findOne({sub_id: req.params.sub_id});
        if(!info) return response.notFound(res, "Farm doesn't exists!!!");
        if(!req.user.farms.includes(req.params.sub_id)) return response.forbidden(res, "Permission Denied!!!");
        let full_info = await serializer.convertOutput(info);
        return response.ok(res, full_info);
    }catch(err){
        return response.internal(res, err)
    }
}

/** Creat new farm*/
async function newSubstation(req, res) {
    try{
        console.log(req.body)
        if(!req.user.is_admin) return response.forbidden(res,"Permission Denied!!!");
        if(!gateway.includes(req.body.sub_id)) return response.badData(res, "Sensor doesn't exist!!!");
        let check_sub = await Information.findOne({sub_id: req.body.sub_id});
        if(check_sub) return response.badRequest(res,"Sensor has already in use!!!");
        else {
            let seeds = await mongoose.models['farm_seeds'].find({}).distinct("seed");
            console.log(seeds, req.body.seed, seeds.includes(req.body.seed));
            if(!seeds.includes(req.body.seed)) return response.badData(res, "Seed doesn't support!!!");
        }
        req.body.owner_id = req.user._id;
        let farm = await Information.create(req.body);
        await User.updateMany({is_admin:true},{ $push: {"farms": farm.sub_id}});
        let full_info = await serializer.convertOutput(farm);
        return response.created(res, full_info)
    }catch(err){
        console.log(err);
        return response.internal(res, err)
    }
}

/** Edit information of farm*/
async function editSub(req, res){
    let change_element = req.body;
    try {
        if(!req.user.is_admin) return response.forbidden(res,"Permission Denied!!!");
        if(change_element.sub_id) delete change_element.sub_id;
        if(change_element.seed) delete change_element.seed;
        let farm = await Information.findOneAndUpdate({sub_id:req.params.sub_id}, change_element, {new:true});
        let full_info = await serializer.convertOutput(farm);
        response.ok(res, full_info)
    }catch (err) {
        console.log(err);
        response.internal(res, err)
    }
}

/** Follow a substation*/
async function addSubToUser(req, res) {
    try{
        if(!req.user.is_admin) return response.forbidden(res,"Permission Denied!!!");
        // console.log(req.body)
        let check_user = await User.findById(req.body.user_id);
        if(!check_user) return response.notFound(res,"User doesn't exist!!!");

        if(check_user.farms.length > req.body.sub_id.length){
            let compare = lodash.difference(check_user.farms, req.body.sub_id);
            for(let i=0;i<compare.length;i++){
                let farm = await Information.findOne({sub_id: compare[i]},{_id:1});
                if(!farm) return response.notFound(res,"Farm doesn't exist!!!");
                await User.findOneAndUpdate({_id:req.body.user_id},{ $pull: {"farms": compare[i]}},{new:true});
            }
        }
        else{
            let compare = lodash.difference(req.body.sub_id, check_user.farms);
            for(let i=0;i<compare.length;i++){
                let farm = await Information.findOne({sub_id: compare[i]},{_id:1});
                if(!farm) return response.notFound(res,"Farm doesn't exist!!!");
                await User.findOneAndUpdate({_id:req.body.user_id},{ $push: {"farms": compare[i]}},{new:true});
            }
        }
        let user = await User.findById(req.body.user_id);
        return response.created(res, user)
    }catch(err){
        console.log(err);
        return response.internal(res, err)
    }
}

/** Delete substation*/
async function deleteSub(req, res){
    try {
        if (!req.user.is_admin) return response.forbidden("Permission Denied!!!");
        await Information.findOneAndDelete({sub_id:req.params.sub_id});
        await User.updateMany({},{ $pull: {"farms": req.params.sub_id}});
        response.noContent(res)
    }catch (err) {
        response.internal(res, err);
    }
}

module.exports={
    getSubstation,
    getSubById,
    newSubstation,
    editSub,
    addSubToUser,
    deleteSub
};