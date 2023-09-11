import { Post } from "../../modals/postModal.js";

export const postResolver = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        console.log(posts)
        return posts;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
