const mongoose = require('mongoose');

const User = mongoose.model('User');

// req.body => são para parametros pelo body 
// req.params => são para parametros pela url 
// req.query => são para parametros get 

module.exports = {
    // Listando todos os usuarios
    async index(req, res) {
        const { page = 1 } = req.query;
        const Users = await User.paginate({}, { page, limit: 9 });

        return res.json(Users);
    },

    // Listando um unico usuario
    async show(req, res) {
        const user = await User.findById(req.params.id);
        
        return res.json(user);
    },

    // Criando usuario
    async store(req, res) {
        const { user } = req.body;
        
        if (!user) {
            user = await User.create(req.body);
            console.log(req.body);
            console.log(req.file);
        }

        return res.json(user);
    },

    // Atualizar usuario
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    },

    // Deletar usuario
    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    }
};