const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const { email, password } = request.body;

        const airline = await connection('airlines').where('email',email).select('password').first();

        if(!airline) {
            return response.status(400).json({ error: 'No Airline found with this email' });
        }
        if(airline.password!==password){
            //checar erro http
            return response.status(400).json({ error: 'Wrong password.' });
        }
        return response.json(airline);
    }
}