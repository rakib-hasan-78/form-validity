

let emailValidity = (mail)=>{

    const regexEmail = new RegExp(/^[\w-]+(\.[\w-]+)*@((yahoo|gmail|gsm|hotmail|outlook)\.com)$/i)
    let regexEmailTest = regexEmail.test(mail)
    let atSymbol = mail.indexOf(`@`)
    let mailSymbol = !(atSymbol<1)
    let dot = mail.lastIndexOf(`.`)
    let dotPosition = !(dot<=atSymbol +2)
    let lastDot = !(dot===mail.length-1)

    return{
        isValidMail: regexEmailTest&& mailSymbol&&dotPosition&&lastDot,
        errors: [`Invaild mail formation or mail without yahoo,gmail,gsm,hotmail,outlook domain!`]
    }


}
export default emailValidity