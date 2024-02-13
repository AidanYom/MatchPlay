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
    { collection: 'user_profiles'}
);

module.exports = mongoose.model("User", userSchema);