const animais = [
{
nome:"Baleia-azul",
descricao:"O maior animal do planeta, podendo ultrapassar 30 metros."
},
{
nome:"Tartaruga-verde",
descricao:"Espécie ameaçada que vive em mares tropicais."
},
{
nome:"Tubarão-branco",
descricao:"Um dos maiores predadores dos oceanos."
},
{
nome:"Polvo",
descricao:"Possui três corações e é extremamente inteligente."
},
{
nome:"Golfinho",
descricao:"Mamífero marinho conhecido pela inteligência."
}
];

const perguntas = [
{
pergunta:"Qual é o maior animal do planeta?",
opcoes:["Baleia-azul","Tubarão-branco","Polvo"],
correta:0
},
{
pergunta:"Quantos corações possui um polvo?",
opcoes:["1","2","3"],
correta:2
}
];

let indice=0;
let pontos=0;

function mostrar(id){
document.querySelectorAll(".pagina").forEach(p=>p.classList.add("escondido"));
document.getElementById(id).classList.remove("escondido");
}

function carregarAnimais(lista=animais){
const div=document.getElementById("listaAnimais");
div.innerHTML="";

lista.forEach(a=>{
div.innerHTML+=`
<div class="card">
<h2>${a.nome}</h2>
<p>${a.descricao}</p>
</div>`;
});
}

function pesquisar(){
const texto=document.getElementById("pesquisa").value.toLowerCase();

const filtrados=animais.filter(a=>
a.nome.toLowerCase().includes(texto)
);

carregarAnimais(filtrados);
}

function mostrarPergunta(){

if(indice>=perguntas.length){
document.getElementById("quizArea").innerHTML=
`<h2>Fim do Quiz!</h2>`;
document.getElementById("pontuacao").innerHTML=
`Pontuação: ${pontos}/${perguntas.length}`;
return;
}

const p=perguntas[indice];

let html=`<div class="card">
<h2>${p.pergunta}</h2>`;

p.opcoes.forEach((op,i)=>{
html+=`<button onclick="responder(${i})">${op}</button><br><br>`;
});

html+="</div>";

document.getElementById("quizArea").innerHTML=html;
}

function responder(i){

if(i===perguntas[indice].correta){
pontos++;
}

indice++;

mostrarPergunta();
}

function proximaPergunta(){
mostrarPergunta();
}

carregarAnimais();
mostrarPergunta();