let tomato = {
    seed: "tomato",
    germination_days: 35,
    development_1_days: 60,
    development_2_days: 0,
    germination_stage:{
        name: "germination stage",
        min_temp: 21,
        max_temp: 30,
        min_light: 2000,
        max_light: 2300,
        min_PH: 7,
        max_PH: 8,
        min_soil_moisture: 55,
        max_soil_moisture: 60,
        min_hum: 75,
        max_hum: 85
    },
    development_1_stage:{
        name: "development stage",
        min_temp: 21,
        max_temp: 30,
        min_light: 2000,
        max_light: 3000,
        min_PH: 5.5,
        max_PH: 7,
        min_soil_moisture: 70,
        max_soil_moisture: 80,
        min_hum: 85,
        max_hum: 90
    }
};

let pakchoi = {
    seed: "pakchoi",
    germination_days: 10,
    development_1_days: 35,
    development_2_days: 0,
    germination_stage:{
        name: "germination stage",
        min_temp: 20,
        max_temp: 30,
        min_light: 2000,
        max_light: 2300,
        min_PH: 5.5,
        max_PH: 6.5,
        min_soil_moisture: 55,
        max_soil_moisture: 60,
        min_hum: 75,
        max_hum: 80
    },
    development_1_stage:{
        name:"development stage",
        min_temp: 18,
        max_temp: 30,
        min_light: 2000,
        max_light: 3200,
        min_PH: 6.5,
        max_PH: 7,
        min_soil_moisture: 75,
        max_soil_moisture: 85,
        min_hum: 75,
        max_hum: 90
    }
};

let brassica = {
    seed: "brassica",
    germination_days: 10,
    development_1_days: 35,
    development_2_days: 0,
    germination_stage:{
        name: "germination stage",
        min_temp: 20,
        max_temp: 30,
        min_light: 2000,
        max_light: 2300,
        min_PH: 5.5,
        max_PH: 6.5,
        min_soil_moisture: 55,
        max_soil_moisture: 60,
        min_hum: 75,
        max_hum: 80
    },
    development_1_stage:{
        name: "development stage",
        min_temp: 18,
        max_temp: 30,
        min_light: 2000,
        max_light: 3200,
        min_PH: 5.5,
        max_PH: 6.5,
        min_soil_moisture: 75,
        max_soil_moisture: 85,
        min_hum: 75,
        max_hum: 90
    }
};

let cucumber = {
    seed: "cucumber",
    germination_days: 15,
    development_1_days: 25,
    development_2_days: 30,
    germination_stage:{
        name: "germination stage",
        min_temp: 20,
        max_temp: 30,
        min_light: 2000,
        max_light: 2300,
        min_PH: 6,
        max_PH: 6,
        min_soil_moisture: 55,
        max_soil_moisture: 60,
        min_hum: 75,
        max_hum: 80
    },
    development_1_stage:{
        name: "development 1 stage",
        min_temp: 18,
        max_temp: 30,
        min_light: 2000,
        max_light: 3000,
        min_PH: 6,
        max_PH: 6,
        min_soil_moisture: 75,
        max_soil_moisture: 85,
        min_hum: 80,
        max_hum: 90
    },
    development_2_stage:{
        name: "development 2 stage",
        min_temp: 18,
        max_temp: 30,
        min_light: 2500,
        max_light: 3200,
        min_PH: 6,
        max_PH: 6,
        min_soil_moisture: 85,
        max_soil_moisture: 95,
        min_hum: 85,
        max_hum: 95
    },
};

let cabbage = {
    seed: "cabbage",
    germination_days: 40,
    development_1_days: 35,
    development_2_days: 15,
    germination_stage:{
        name: "germination stage",
        min_temp: 18,
        max_temp: 20,
        min_light: 1800,
        max_light: 2200,
        min_PH: 6,
        max_PH: 6.5,
        min_soil_moisture: 70,
        max_soil_moisture: 80,
        min_hum: 76,
        max_hum: 85
    },
    development_1_stage:{
        name: "development 1 stage",
        min_temp: 15,
        max_temp: 18,
        min_light: 2500,
        max_light: 3000,
        min_PH: 6,
        max_PH: 6.5,
        min_soil_moisture: 75,
        max_soil_moisture: 85,
        min_hum: 80,
        max_hum: 90
    },
    development_2_stage:{
        name: "development 2 stage",
        min_temp: 14,
        max_temp: 18,
        min_light: 2500,
        max_light: 3000,
        min_PH: 5.6,
        max_PH: 6,
        min_soil_moisture: 75,
        max_soil_moisture: 85,
        min_hum: 80,
        max_hum: 90
    },
};

let gateway = [
    'G00', 'G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G07', 'G08',
    'G09', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G16',
    'G17', 'G18', 'G19', 'G20', 'G21', 'G22', 'G23', 'G24'
];

module.exports ={
    tomato,
    pakchoi,
    brassica,
    cucumber,
    cabbage,
    gateway
};