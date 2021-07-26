import mongoose from 'mongoose'
const Schema = mongoose.Schema

export { 
    nbaPlayer
}

const nbaPlayerSchema = new Schema({ 
    name: {
        type: String, 
        required: true
    },

    team: { 
        type: String, 
        default: "Mixed"
    },
    age: { 
        type: Number, 
        default: 17
    }
    
})

const nbaPlayer = mongoose.model("spanishFood", spanishFoodSchema)