const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const { id } = request.body;

        const airline = await connection('airlines').where('id',id).select('name').first();

        if(!airline) {
            return response.status(400).json({ error: 'No Airline found with this ID' });
        }

        return response.json(airline);
    }
}