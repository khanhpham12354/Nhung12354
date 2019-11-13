const network = require('../../../config/network');
const configStatus = require('../../../config/seeds');
const Seed = require('../farm/seeds/models/seeds');
const User = require('../user/models/users');

async function convertOutput(object) {
    if(object.toObject) object = object.toObject({getters: true});
    if(object.photo) object.photo = getPhoto(object.photo);
    if(object.owner_id) object.manager = await getUser(object.owner_id)
    if(object.id) delete object.id;
    if(object.password) delete object.password;
    if(object.started_plant) getStageSeed(object)
    delete object.__v;
    return Object.entries(object).sort().reduce((obj, [k,v]) => ({...obj, [k]: v}), {});
}

function getPhoto(img_path){
    let splited_path = img_path.split('\\');
    let photo_url = splited_path.slice(0, splited_path.length).join('/');
    return `http://${network.hostname}:${network.port}/static/${photo_url}`;
}

async function getUser(user_id){
    try{
        let user = await User.findById(user_id,{full_name:1, email: 1, phone_number:1, _id:0});
        return user;
    }catch(err){
        throw err
    }
}

function getStageSeed(object){
    try{
        let days = Math.floor((new Date() - object.started_plant)/(1000*60*60*24));
        object.days = days;
        // console.log(days)
        let germination = configStatus[object.seed].germination_days;
        let development_1 = germination + configStatus[object.seed].development_1_days;
        let development_2 = development_1 + configStatus[object.seed].development_2_days;
        // console.log(germination,development_1,development_2)
        if (days < germination) object.status = configStatus[object.seed].germination_stage;
        if (days < development_1 && days > germination) object.status = configStatus[object.seed].development_1_stage;
        if (days >= development_1){
            if(development_1 === development_2) object.status = {name:"harvest"};
            else object.status = days>development_2 ? {name:"harvest"}: configStatus[object.seed].harvest_stage
        }
        return object
    }catch(err){
        throw err
    }
}

module.exports = {
  convertOutput
};