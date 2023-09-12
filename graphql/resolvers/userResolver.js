import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server";

import { User } from "../../modals/userModal.js";

export const userResolver = {
  Mutation: {
    async register(parent,{registerInput:{username,email,password}}, context, info) {
      // validate user input data
      // make sure user isn't already exists

      const userExist =await User.findOne({username});
      if(userExist){
        throw new UserInputError("Username already in use",{
          errors:{
            username:"This username is already in use. Please try with another username"
          }
        })
      };
      const emailExists = await User.findOne({email});
      if(emailExists){
        throw new UserInputError("email already in use",{
          errors:{
            email:"This email is already in use,Please try with another email"
          }
        })
      }
   
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
