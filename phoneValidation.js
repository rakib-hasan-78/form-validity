
const phoneValidation = (phn)=>{
    const regexPhn = new RegExp(/^(?:(?:\+|00)88|01)?\d{11}$/)
    let phnRegex = regexPhn.test(phn)
    let isValidPhn = phn.length === 10 || phn.length === 11
    return{
        isValidCondition: isValidPhn&&phnRegex,
        errors: [`Phone Number Is Not Valid. At least 10 Digit Needed.`]
    }
}
export default phoneValidation

