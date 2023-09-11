import  { model,Schema} from "mongoose";

const postSchema = new Schema({
    body:String,
    postedBy:String,
    createdAt:String,
    comments : [
        {
            body:String,
            commentedBy:String,
            createdAt:String
        }
    ],
    likes:[
        {
            likedBy:String,
            createdAt:String
        }
    ],
    user : {
        type:Schema.Types.ObjectId,
        ref:"users"
    }
});

export const Post = model("post",postSchema);