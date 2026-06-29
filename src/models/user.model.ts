import { Schema, model , models } from "mongoose";



interface user {
    username: string,
    password: string,
    email: string
}

const userSchema = new Schema<user>({
    username: {
        type : String,
        require: true,

    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    }
}, {
timestamps: true
})


export const User = models.User ||  model<user>("User",userSchema)