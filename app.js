document.addEventListener('DOMContentLoaded', function() {

    let nomes = [];

    const campoAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    

    
    function adicionarAmigo() {
        const nome = campoAmigo.value;
        if (nome === '') {
            alert('Por favor, insira um nome válido.');
            return;
        }
        nomes.push(nome);
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista); 
        campoAmigo.value = ''; // Limpa o campo de texto
    }

   
    function sortearAmigo() {
        if (nomes.length === 0) {
            alert('Por favor, adicione pelo menos um nome antes de sortear.'); 
            return;
        }
        const indiceSorteado = Math.floor(Math.random() * nomes.length); 
        const nomeSorteado = nomes[indiceSorteado]; 
        resultado.textContent = `O amigo secreto é: ${nomeSorteado}`; 
    }

    const botaoAdicionar = document.querySelector('.button-add');
    const botaoSortear = document.querySelector('.button-draw');

    botaoAdicionar.addEventListener('click', adicionarAmigo);
    botaoSortear.addEventListener('click', sortearAmigo);
});