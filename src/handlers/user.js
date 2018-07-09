import User from '../models/User'

export default {
    getUsers: (req,reply) => {
        return User.find()
    },
    creaUser: (req,reply) => {
        const { provider, displayName, name, emails, photos } = req.payload
        const user = new User({
            provider,
            displayName,
            name,
            emails,
            photos
        })
        console.log("user:",user)
        return user.save()
    }
}


