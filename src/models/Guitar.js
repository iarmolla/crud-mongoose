import { Schema, model } from 'mongoose'

const guitarSchema = new Schema({
    model: String,
    description: String,
    price: Number,
    stock: Number
})

export default model('Guitar', guitarSchema)

