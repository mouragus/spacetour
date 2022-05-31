const botaoSubmit = document.getElementById('btnEnviar')
const formulario = document.querySelector('.cadastrarContato')
const campos = formulario.querySelectorAll('input[required]')

botaoSubmit.addEventListener("click", ()=>{
    
    for (let i = 0; i < campos.length; i++) {
        const campoAtual = campos[i];

        //Verifica se é um campo de radio (genero)
        if(campoAtual.attributes.getNamedItem('type').value === 'radio'){
            //Verifica se algum valor foi selecionado para o genero
            let generoSelecionado = verificaGenero(campoAtual.attributes.getNamedItem('name').value);

            //Mostra a mensagem de erro caso não foi selecionado nenhuma opção
            if(generoSelecionado === false){
                campoFaltando('Gênero')
                return
            }
        
        //Outros campos    
        }else{
            //Verifica se foi digitado algo além de espaços
            if(campoAtual.value.trim() === ""){
                //Mostra a mensagem de erro 
                campoFaltando(campoAtual.attributes.getNamedItem('data-validacao').value)
                //Adiciona a classe css que deixa a borda vermelha no campo
                campoAtual.classList.add('preencher')
                return
            }
        }
    }

    // REALIZANDO O SUBMIT
    formulario.submit()
})

//Sempre que um campo for preenchido, a borda vermelha é removida
campos.forEach(campo => {
    campo.addEventListener('change', ()=>{
        if(campo.value != ""){
            campo.classList.remove('preencher')
        }
    })
})

function verificaGenero(nameInput){
    let opcoes = document.getElementsByName(nameInput)
    let algumSelecionado = false

    for (let i = 0; i < opcoes.length; i++) {
        if(opcoes[i].checked)
            algumSelecionado = true
    }

    return algumSelecionado
}

function campoFaltando(campo){
    alert(`O CAMPO ${campo} NÃO FOI PREENCHIDO!`)
}