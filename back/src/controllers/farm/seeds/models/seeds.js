const mongoose = require('mongoose');

const SeedSchema = new mongoose.Schema({
    seed: {
        type: String,
        require: true,
        index: true
    },
    germination_days: Number,
    development_1_days: Number,
    development_2_days: Number,
    germination_stage:{
        name: String,
        min_temp: Number,
        max_temp: Number,
        min_light: Number,
        max_light: Number,
        min_PH: Number,
        max_PH: Number,
        min_soil_moisture: Number,
        max_soil_moisture: Number,
        min_hum: Number,
        max_hum: Number
    },
    development_1_stage:{
        name: String,
        min_temp: Number,
        max_temp: Number,
        min_light: Number,
        max_light: Number,
        min_PH: Number,
        max_PH: Number,
        min_soil_moisture: Number,
        max_soil_moisture: Number,
        min_hum: Number,
        max_hum: Number
    },
    development_2_stage:{
        name: String,
        min_temp: Number,
        max_temp: Number,
        min_light: Number,
        max_light: Number,
        min_PH: Number,
        max_PH: Number,
        min_soil_moisture: Number,
        max_soil_moisture: Number,
        min_hum: Number,
        max_hum: Number
    }
},{ versionKey: false });

const Seed = mongoose.model("farm_seeds", SeedSchema);
module.exports = Seed;
