function passValidation(pwd){
    // * password 
    const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^*]).{8,16}$/)
    const isValidLength = pwd.length>=8 && pwd.length<=16
    const pwdRegex = passRegex.test(pwd)
    return{
      isValidPass: isValidLength && pwdRegex,
      errors: [`Password Must Contain 8 To 16 Charecter including Uppercase, Lowercase, Number, Special Character.`]
    } 
}

export default passValidation