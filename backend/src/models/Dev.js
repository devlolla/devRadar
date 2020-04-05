const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
  
    
})

//primeiro como vai ser salvo no banco de dados, e segundo o DevSchema que vc criou
module.exports = mongoose.model('Dev', DevSchema); 