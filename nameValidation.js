import { webpack } from "webpack"


const nameValidator =(clientName) => {
    const nameRegex = new RegExp(/^[A-Za-z]+$/)
    let nameCheck = nameRegex.test(clientName)
    
    let nameLength = !(clientName.length<=2)
    let nameType = !(clientName.typeof('Number'))

    return{
        isValidName : nameCheck&&nameLength&&nameType,
        errors: `Invalid Name! Provide Valid One.`
    }
}

export default nameValidator