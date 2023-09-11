import { User } from "../../modals/userModal.js";

export const userResolver = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
