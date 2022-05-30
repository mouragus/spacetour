const botaoSubmit = document.getElementById('btnEnviar')

botaoSubmit.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='radio'],input[type='date']")

    for(let x = 0 ; x < campos.length ; x++){
        if(campos[x].value == ""){
            alert("O CAMPO "+ campos[x].placeholder +" NAO FOI PREENCHIDO!")
            return
        }
    }

    // REALIZANDO O SUBMIT
    document.querySelector('.cadastrarContato').submit()

})