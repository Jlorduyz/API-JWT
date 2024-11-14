import {Schema, model} from "mongoose";

let collection = 'users';
let userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email:{type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
    online: {type: Boolean, default: false},
},{
    timestamps: true,
})

let User = model(collection, userSchema);

export default User;