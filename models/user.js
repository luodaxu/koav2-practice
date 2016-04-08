import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
});

UserSchema.statics.getExistUser = function (username, password) {
    return this.findOne({username: username, password: password}).exec();
};

const User = mongoose.model('User', UserSchema);

export default User;
