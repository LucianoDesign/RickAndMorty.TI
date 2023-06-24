const { User }  = require('../DB_connection');


const postUser = async (req, res) => {
    try {
        const {email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({ message: 'Faltan datos'});
        }
        const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: { password }
        });
        if(!created) {
            return res.status(200).json({ message: 'Usuario ya existente'});
        }

        return res.status(200).json({ newUser });
        
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

module.exports = {postUser};