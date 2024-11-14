import {Schema, model} from "mongoose";

let collection = 'invoices';

let schema = new Schema({
    date:{type:Date, required: true, default: new Date()},
    description: {type: String, required: true},
    value: {type: Number, required: true},
    asset: {type: Boolean},
    user: {type: Schema.Types.ObjectId, ref: 'users', required: true},


},{
    timestamps: true,
})

let Invoice = model(collection, schema)

export default Invoice