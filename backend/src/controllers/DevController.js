//dentro das pastas "Controller's" são ativadas as requisições e devolvidas as respostas
//cria um por entidade

const axios = require('axios');
const Dev = require('../models/Dev')
const transformaStringEmArray = require('../utils/transformaStringEmArray')

module.exports = {
    async index(request,response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        let dev = await Dev.findOne({ github_username });
        
        if(!dev) {
            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = transformaStringEmArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create ({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
        })
        }
        
        return response.json(dev);
 }
};

//exercicio opcional de add

// async update(){
    //altera um Dev
//},

//async destroy(){
    // destroi um dev
//}