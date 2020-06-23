const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const { page = 1 } = request.query;

        const flights = await connection('flights').limit(5).offset((page-1)*5)
        .select([
            'flights.*',
            'airlines.name',
            'airlines.email',
            'airlines.city',
            'airlines.uf'
        ]);

        return response.json(flights);
    },

    async create (request,response) {
        const { destiny, date, hour, value } = request.body;
        const airline_id = request.headers.authorization;

        const [id] = await connection('flights').insert({
            destiny,
            date,
            hour,
            value,
            airline_id,
        })

        return response.json({ id });
    },

    async delete(request,response) {
        const { id } = request.params;

        const airline_id = request.header.authorization;

        const flight = await connection('flights').where('id',id).select('airline_id').first();

        if(flights.airline_id!==airline_id){
            return response.status(401).json({error: 'Operation not permited'});
        }

        await connection('flights').where('id',id).delete();

        return response.status(204).send();
    }
}