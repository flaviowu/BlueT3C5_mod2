let inputNome = document.querySelector("#nome")
let inputEmail = document.querySelector("#email")
let textAreaMsg = document.querySelector("#mensagem")
let btnEnviar = document.querySelector("#enviar")

inputNome.addEventListener("keyup", () => {
    if (inputNome.value.length < 3) {
        inputNome.style.borderColor = 'red'
    } else {
        inputNome.style.borderColor = 'green'
    }
})

inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf(".") == -1) {
        inputEmail.style.borderColor = 'red'
    } else {
        inputEmail.style.borderColor = 'green'
    }
})

textAreaMsg.addEventListener("keyup", () => {
    if (textAreaMsg.value.length > 100) {
        textAreaMsg.style.borderColor = 'red'
    } else {
        textAreaMsg.style.borderColor = 'green'
    }
})

btnEnviar.addEventListener('click', () => {
    alert('Formulário enviado com sucesso!')
 })

