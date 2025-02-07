//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo(){

let input = document.getElementById('amigo');
let amigo =  input.value.trim(); // Remove espaços extras

if (amigo == ''){

    alert('Nenhum nome digitado, por favor insira um nome!');
    input.value = "";
    return;

} if (listaAmigos.includes(amigo)){

    alert('Amigo ja existe na lista, por favor digite outro nome');
    input.value = "";
    return;
} 
listaAmigos.push(amigo);
atualizarLista();
input.value = "";

}

function atualizarLista(){


    let lista = document.getElementById('listaAmigos'); // Seleciona o elemento <ul>
    lista.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        let item = document.createElement('li'); // Cria um novo elemento <li>
        item.textContent = amigo; // Define o texto do <li> com o nome do amigo
        lista.appendChild(item); // Adiciona o <li> à <ul>
    });
}

function sortearAmigo(){

    if (listaAmigos.length == 0){

        alert('Não há amigos na lista, por favor insira amigos na lista');
         return;
    }

    let numeroAleatorio = parseInt(Math.floor(Math.random()*listaAmigos.length));;
    let amigoSorteado = listaAmigos[numeroAleatorio];
    let lista = document.getElementById('resultado'); // Seleciona o elemento <ul>
    lista.innerHTML = '';
    let  item = document.createElement('li');
    item.textContent = amigoSorteado
    lista.appendChild(item)
    filtered = filter
} 
    
