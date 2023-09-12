import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server";

import { User } from "../../modals/userModal.js";
import { validateLoginInput, validateRegisterInput } from "../../utils/validator.js";
import { generateToken } from "../../utils/helper.js";

export const userResolver = {
  Mutation: {

    async register(parent,{registerInput:{username,email,password}}, context, info) {

      const {valid,errors}= validateRegisterInput(username,email,password);
      if(!valid){
        throw new UserInputError(`Error`,{errors})
      }

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

      const token =await generateToken(res._id,res.email,res.username);

        return {
         ...res._doc,
         id:res._id,
         token
        }
    },

    async login(_,{email,password}){
      const {errors,valid} = validateLoginInput(email,password);

      if(!valid){
        throw new UserInputError(`Error`,{errors})
      }

      const userExists = await User.findOne({email});
      if(!userExists){
        errors.general = "User not found"
        throw new UserInputError("User not found",{errors})
      }
      const matchPassword =await bcryptjs.compare(password,userExists.password);
      if(!matchPassword){
        errors.general = "Invalid credentials"
        throw new UserInputError("Invalid credentials",{errors})
      };
      const token =await generateToken(userExists._id,userExists.email,userExists.username);

      return {
        ...userExists._doc,
        id:userExists._id,
        token
      }
    }
  },
};
