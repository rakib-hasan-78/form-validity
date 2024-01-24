// import "./image/code.jpg"
// import "./styles/main.scss"
// import eyeOpenAndClose from './eyeOpenAndClose'
// import validation from "./validation";


const eyeOpenAndClose = (pwd,eyesicon, openeye, closeeye)=>{
  let password = document.getElementById(pwd)
  let eyesIcon = document.getElementById(eyesicon)
  let openEye = document.querySelector(openeye)
  let slashedEye = document.querySelector(closeeye)

  eyesIcon.addEventListener(`click`, (e) =>{
    if (password.type===`password`) {
        password.setAttribute(`type`,`text`)
        slashedEye.style.display = `none`
        openEye.style.display =`inline-block`
    } else {
        password.setAttribute(`type`, `password`)
        openEye.style.display = `none`
        slashedEye.style.display = `inline-block`
      }
  })
}

// write password eye-slash and open function
eyeOpenAndClose(`password`,`eyesIcon`,`.bi-eye`,`.bi-eye-slash`)

//  re-type password eye-slash and open function
eyeOpenAndClose(`rePassword`,`eyesIconReType`,`.beye`,`.beye-slash`)


function passValidation(pwd){
  // * password 
  const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^*]).{8,16}$/)
  const isValidLength = pwd.length>=8 && pwd.length<=16
  const pwdRegex = passRegex.test(pwd)
  return{
    isValidPass: isValidLength && pwdRegex,
    errors: [`Password should be 8 To 16 Charecter including Uppercase, Lowercase, Number, Special Character.`]
  } 
}

const phoneValidation = (phn)=>{
  const regexPhn = new RegExp(/^(?:(?:\+|00)88|01)?\d{11}$/)
  let phnRegex = regexPhn.test(phn)
  let isValidPhn = phn.length === 10 || phn.length === 11
  return{
      isValidCondition: isValidPhn&&phnRegex,
      errors: [`Phone Number Is Not Valid. At least 10 Digit Needed.`]
  }
} 

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
      errors: [`invalid mail attempted!only provide yahoo, gmail, outlook, hotmail, gsm mail`]
  }


}

const nameValidator =(clientname) => {
  const nameRegex = new RegExp("^[A-Za-z\\s]+$")
  let nameCheck = nameRegex.test(clientname)
  
  let nameLength = !(clientname.length<=2)
  let nameType = isNaN(clientname)

  return{
      isValidName : nameCheck&&nameLength&&nameType,
      errors: `Invalid Name! Provide Valid One.`
  }
}


let validation = (pas, rePass, phnNumber, mail, user) =>{

  const passSec = document.querySelectorAll(`.independent`)[3];
  let passwordError = document.getElementById(`passwordError`)
  let pass = pas.value.trim()
  let validate = passValidation(pass)
  if (!validate.isValidPass) {
      passSec.style.cssText = `
        display:block;
        font-weight:600;
        color:var(--bs-pink); 
       `
      passwordError.innerHTML = Object.values(validate.errors).join('')
    } else{
      passSec.style.display = `none`
      passwordError.innerHTML =` `
  }
  // * repassword validation
  const repassSec = document.querySelectorAll(`.independent`)[4];
  const reTypePwdError = document.getElementById(`reTypePwdError`)
  let repass = rePass.value.trim()
  if (pass!==repass) {
      repassSec.style.cssText = `
        display: block;
        color:var(--bs-pink);
        font-weight:600;
      `
      reTypePwdError.innerHTML = `pwd did not match`
  }else{
    repassSec.style.display = `none`
    reTypePwdError.innerHTML = ` `
  }

  // ** phone  number validation 
  const phnSec = document.querySelectorAll(`.independent`)[2];
  const phoneError = document.getElementById(`phoneError`)
  let phn = phnNumber.value.trim()
  let phnValidate = phoneValidation(phn)
  if (!phnValidate.isValidCondition) {
      phnSec.style.cssText = ` 
        display:block;
        color:var(--bs-pink);
        font-weight:600;
      `
      phoneError.innerHTML = Object.values(phnValidate.errors).join(``)
  } else{
      phnSec.style.display = `none`
      phoneError.innerHTML = ``
    }
  
  // * email validation 
  const emailSec = document.querySelectorAll(`.independent`)[1];
  const emailError = document.getElementById(`emailError`)
  let email = mail.value.trim()
  let validEmail = emailValidity(email)
  if (!validEmail.isValidMail) {
      emailSec.style.cssText= `
        display:block;
        color: var(--bs-pink);
        font-weight: 600;
      `
      emailError.innerHTML = Object.values(validEmail.errors).join(``)
  } else {
    emailSec.style.display = `none`
    emailError.innerHTML = ` `
  }

  // *  name validation 
  const nameSec = document.querySelectorAll(`.independent`)[0];
  const nameError = document.getElementById(`nameError`)
  let client =user.value.trim()
  let clientName = nameValidator(client)

  if (!clientName.isValidName) {
    nameSec.style.cssText = `
      height:10px;
      display: block;
      color: var(--bs-pink);
    `
    nameError.innerHTML = Object.values(clientName.errors).join(``)
  } else{
    nameSec.style.display = `none`
    nameError.innerHTML = ` `
  }
  return clientName.isValidName&&validEmail.isValidMail&&phnValidate.isValidCondition&&pass===repass&&validate.isValidPass&&validate.isValidPass ? true : false;

} 




// form handling ...
const form = document.getElementById(`form`)
const userName = document.getElementById(`name`)
const email = document.getElementById(`email`)
const phone = document.getElementById(`phone`)
const password = document.getElementById(`password`)
const rePassword = document.getElementById(`rePassword`)
const success = document.getElementById(`success-text`)


form.addEventListener(`submit`, function(e) {
  e.preventDefault()
  let isValid = false
  ;[...this.elements].forEach(element=>{
    if (element.type !== 'submit') {
      isValid = validation(password,rePassword, phone, email, userName)
    }
  })

  if(isValid) {
    success.innerHTML = `Form Submission Done! We will Get You Soon!` 
    success.style.cssText =`
      color: var(--bs-indigo);
    `
    let userData ={
      name:userName.value,
      email: email.value,
      phone: phone.value,
      password: password.value
    }
    console.log(JSON.stringify(userData))
    this.reset()
   } else{
    success.innerHTML = ` `
   }

})  





