const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const airline_id = request.headers.authorization;

        const flights = await connection('flights').where('airline_id', airline_id).select('*');

        return response.json(flights);
    }
}