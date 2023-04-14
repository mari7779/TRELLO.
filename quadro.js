let idLista = 2;

function criarLista() {
  const quadro = document.getElementById("quadro");
  const novaLista = document.createElement("div");
  novaLista.classList.add("lista");
  novaLista.innerHTML = `
    <h2>Lista ${idLista}</h2>
    <ul class="cards">
      <li class="card">Cartão 1</li>
      <li class="card">Cartão 2</li>
    </ul>
    <form class="formulario">
      <input type="text" placeholder="Adicionar cartão">
      <button type="button" onclick="adicionarCartao(this)">Adicionar</button>
      <button type="button" onclick="fecharFormulario(this)">Fechar</button>
    </form>
    <button type="button" onclick="abrirFormulario(this)">Adicionar cartão</button>
  `;
  quadro.insertBefore(novaLista, quadro.lastChild);
  idLista++;
}

function abrirFormulario(botao) {
  const formulario = botao.previousElementSibling;
  formulario.style.display = "block";
}

function fecharFormulario(botao) {
  const formulario = botao.parentElement;
  formulario.style.display = "none";
}

function adicionarCartao(botao) {
  const formulario = botao.parentElement;
  const input = formulario.querySelector("input");
  const valor = input.value;
  const lista = formulario.previousElementSibling;
  const novoCartao = document.createElement("li");
  novoCartao.classList.add("card");
}