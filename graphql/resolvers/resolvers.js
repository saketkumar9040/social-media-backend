import { postResolver} from "./postResolver.js";
import { userResolver } from "./userResolver.js";

export const resolvers = {
    Query : {
        ...postResolver.Query,
        ...userResolver.Query     
    }
};