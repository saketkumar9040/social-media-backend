import { postResolvers } from "./postResolver.js";
import { userResolvers } from "./userResolver.js";

export const mainResolver = {
    Query : {
        ...postResolvers.Query,
        
    }
}