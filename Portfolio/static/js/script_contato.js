let inputNome = document.querySelector("#nome")
let inputEmail = document.querySelector("#email")
let textAreaMsg = document.querySelector("#mensagem")
let btnEnviar = document.querySelector("#enviar")
let formChange = document.querySelector("#form")
let nomeFlag = undefined
let emailFlag = undefined
let textAreaFlag = undefined


inputNome.addEventListener("keydown", () => {
    if (inputNome.value.length < 3) {
        inputNome.style.borderColor = 'red'
        nomeFlag = false
    } else {
        inputNome.style.borderColor = 'green'
        nomeFlag = true

    }
})

inputEmail.addEventListener("keydown", () => {
    if (inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf(".") == -1) {
        inputEmail.style.borderColor = 'red'
        emailFlag = false
    } else {
        inputEmail.style.borderColor = 'green'
        emailFlag = true
    }
})

textAreaMsg.addEventListener("keydown", () => {
    if (textAreaMsg.value.length > 100) {
        textAreaMsg.style.borderColor = 'red'
        textAreaFlag = false
    } else {
        textAreaMsg.style.borderColor = 'green'
        textAreaFlag = true
    }
})

// formChange.addEventListener("submit", ()=> {
//     (nomeFlag && emailFlag && textAreaFlag)? 
// })

