 import jwt from "jsonwebtoken";
 
 export const generateToken = async(id,email,username) => {
     try {
        const token = await jwt.sign(
            {
              id: id,
              email: email,
              username: username,
            },
            process.env.SECRET_KEY,
            { 
              expiresIn: "183d" 
            }
          );
          return token;
     } catch (error) {
        console.log(error)
     }
 }