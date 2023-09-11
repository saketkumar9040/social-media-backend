import {User} from "../../modals/userModal.js"

export const userResolvers = {
    Query : {
       async getPosts(){
            try {
               const users = await User.find();
               return users;
            } catch (error) {
                console.log(error)
            }
        }
    }
};