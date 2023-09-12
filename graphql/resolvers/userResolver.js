import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../../modals/userModal.js";

export const userResolver = {
  Mutation: {
    async register(parent,{registerInput:{username,email,password}}, context, info) {
      // validate user input data
      // make sure user isn't already exists

      // hash password and create an auth token

      password = await bcryptjs.hash(password, 12);
      const newUserRegistration = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUserRegistration.save();

      const token = await jwt.sign(
        {
          id: res._id,
          email: res.email,
          username: res.username,
        },
        process.env.SECRET_KEY,
        { 
          expiresIn: "183d" 
        }
      );

        return {
         ...res._doc,
         id:res._id,
         token
        }
    },
  },
};
