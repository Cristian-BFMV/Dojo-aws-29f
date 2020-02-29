const pool = require('../db/index');

const getTodos = async (req, res) => {
    const limit = parseInt(req.query.limit) || 25;
    const offset = parseInt(req.query.offset) || 0;

    const poolPromise = pool.promise();

    try{
        const [results] = await poolPromise.query('SELECT id, title, description, responsible, is_complete as isComplete FROM todo ORDER BY id DESC LIMIT ? OFFSET ?', [limit, offset]);
        res.send(results);        
    }catch(error) {
        res.status(500).send({
            message: 'Error de base de datos',
            error
        })
    }
}

module.exports = getTodos;