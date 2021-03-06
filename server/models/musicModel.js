import mongoose from "mongoose"

const MusicModel = new mongoose.Schema({
    audio: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String, requied: true},
    wishlist: {type: Boolean, default: false}
})

export default mongoose.model('Music', MusicModel)