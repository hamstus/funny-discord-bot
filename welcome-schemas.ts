import mongoose, {Schema} from "mongoose";

const reqString = {
    type: String,
    required: true,
}

const welcomeSchema = new Schema({
    // guild id
    _id: reqString,
    channelID: reqString,
    text: reqString,

})
const name  = 'welcome-test'
export default mongoose.models[name] || mongoose.model(name, welcomeSchema, name)
