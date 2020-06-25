const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const { page = 1 } = request.query;

        const [count] = await connection('flights').count();

        const flights = await connection('flights')
        .join('airlines', 'airlines.id', '=', 'flights.airline_id')
        .limit(5)
        .offset((page-1)*5)
        .select([
            'flights.*',
            'airlines.name',
            'airlines.email',
            'airlines.city',
            'airlines.uf'
        ]);

        response.header('X-Total-Count',count['count(*)']);
        
        return response.json(flights);
    },

    async create (request,response) {
        const { destiny, data, hour, value } = request.body;
        const airline_id = request.headers.authorization;

        const [id] = await connection('flights').insert({
            destiny,
            data,
            hour,
            value,
            airline_id,
        })

        return response.json({ id });
    },

    async delete(request,response) {
        const { id } = request.params;

        const airline_id = request.headers.authorization;

        const flight = await connection('flights').where('id',id).select('airline_id').first();

        if(flight.airline_id!==airline_id){
            return response.status(401).json({error: 'Operation not permited'});
        }

        await connection('flights').where('id',id).delete();

        return response.status(204).send();
    }
}