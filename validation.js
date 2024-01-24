import passValidation from "./passValidation"
import phoneValidation from './phoneValidation'
import emailValidity from './emailValidation'
import nameValidator from "./nameValidation"

let validation = (pas, rePass, phnNumber, mail, user) =>{
  let passwordError = document.getElementById(`passwordError`)
  let pass = pas.value.trim()
  let validate = passValidation(pass)
  if (!validate.isValidPass) {
      passwordError.innerHTML = Object.values(validate.errors).join('')
    } else{
      passwordError.innerHTML =` `
  }
  // * repassword validation
  const reTypePwdError = document.getElementById(`reTypePwdError`)
  let repass = rePass.value.trim()
  if (pass!==repass) {
      reTypePwdError.innerHTML = `pwd did not match`
  }else{
    reTypePwdError.innerHTML = ` `
  }

  // ** phone  number validation 
  const phoneError = document.getElementById(`phoneError`)
  let phn = phnNumber.value.trim()
  let phnValidate = phoneValidation(phn)
  if (!phnValidate.isValidCondition) {
        phoneError.innerHTML = Object.values(phnValidate.errors).join(` `)
  } else{
      phoneError.innerHTML = ``
    }
  
  // * email validation 
  
  const emailError = document.getElementById(`emailError`)
  let email = mail.value.trim()
  let validEmail = emailValidity(email)
  if (!validEmail.isValidMail) {
      emailError.innerHTML = Object.values(validEmail.errors).join(' ')
  } else {
    emailError.innerHTML = ` `
  }

  // *  name validation 
  const nameError = document.getElementById(`nameError`)
  let client =user.value.trim()
  let clientName = nameValidator(client)

  if (!clientName.isValidName) {
    nameError.innerHTML = Object.values(clientName.errors).join(' ')
  } else{
    nameError.innerHTML = ` `
  }

} 

export default validation