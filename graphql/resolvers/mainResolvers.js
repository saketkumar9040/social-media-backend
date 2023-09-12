import { postResolver} from "./postResolver.js";
import { userResolver } from "./userResolver.js";

export const mainResolvers = {
    Query : {
        ...postResolver.Query,
        ...userResolver.Query     
    }
};