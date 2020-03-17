const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// model usuario
const UserSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    },
    typeUser: {
        type: Number,
        require: false,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Paginação - mongoose Paginate
UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);
 