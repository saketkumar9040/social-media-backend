import { postResolver} from "./postResolver.js";
import { userResolver } from "./userResolver.js";

export const mainResolver = {
    Query : {
        ...postResolver.Query,
        ...userResolver.Query     
    }
};