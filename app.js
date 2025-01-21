//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeSorteio =[];

function adicionarAmigo(){
let inserirNomeLista = document.querySelector('input').value;
if (inserirNomeLista == ''){
    alert('Por favor, insira um nome.');
  } else{
  nomeSorteio.push(inserirNomeLista);
  limparCampoNome();
    listarAmigos();
  }
}

function limparCampoNome(){
  inserirNomeLista = document.querySelector('input');
  inserirNomeLista.value = '';
}

function listarAmigos(){
   let lista = document.querySelector('ul');
  lista.innerHTML = '';
  for (let i =0; i < nomeSorteio.length; i++){
    let novoItem = document.createElement('li');
    novoItem.textContent = nomeSorteio[i];
    lista.appendChild(novoItem);
  }
}

function sortearAmigo(){
  if(nomeSorteio.length == 0){
    alert("Nenhum nome foi cadastrado para o sorteio");
  } else {
  let numeroAleatorio = parseInt(Math.random() * nomeSorteio.length);
  let  resultadoSorteio = document.getElementById('resultado');
  resultadoSorteio.innerHTML = '';
  resultadoSorteio.innerHTML = nomeSorteio[numeroAleatorio];
 }
}
