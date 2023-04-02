import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    first_name: { required: true, type: String },
    last_name: { required: true, type: String },
    email: { type: String },
    gender: { type: String },
    ip_address: { type: String },
})

const User = mongoose.model('user', UserSchema);
export default User;