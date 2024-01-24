
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

export default eyeOpenAndClose