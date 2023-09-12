

export const validateRegisterInput = (username,email,password) => {
    const errors={};
 if(username.trim() === ""){
    errors.username = "Username must not be empty"
 }
 if(email.trim() === ""){
    errors.email = "E-mail must not be empty"
 }else{
    const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if(!email.match(regex)){
        errors.email = "Email must be a valid email address"
    }
 }
 if(password.trim() === ""){
    errors.password = "Password must not be empty"
 }
};