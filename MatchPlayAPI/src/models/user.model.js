const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        handicap: {
            type: Number,
            required: true
        }
    },
    // {dbName: 'user-develop'},
    // { collection: 'test'}
);