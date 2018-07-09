const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    provider: String,
    displayName: String,
    name: {
        familyName: String,
        givenName: String,
        middleName: String
    },
    emails: [{
        value: String,
        emailType: String
    }],
    photos: [{
        value: String
    }]
}, {collection: 'users'})

module.exports = mongoose.model('User', UserSchema)