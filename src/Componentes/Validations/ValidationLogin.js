const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
export function validationLogin (userData){
const errors = {};
if(!regexEmail.test(userData.username)) errors.username ='An Email is required Please Correct';
if(!userData.username) errors.username='User cannot be empty';
if(userData.username.lenght > 35) errors.username='It cannot have more than 35 characters';
if(!regexPassword.test(userData.password)) errors.password='The password must have at least one number.';
if(userData.password.lenght < 6 && userData.password.lenght > 10) errors.password='The Password must have a Length between 6 and 10 Characters';
return errors;
}

  