const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response) {
        const airlines = await connection('airlines').select('*');
        
        return response.json({airlines});
    },
    
    async create (request,response) {
        const { name, email, password, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('airlines').insert({
            id,
            name,
            email,
            password,
            city,
            uf
        });

        return response.json({id});
    } 

}