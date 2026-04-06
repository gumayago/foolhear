async function carregaDados() {
  const response = await fetch("http://localhost:3003/viewers");
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.viewer);
  const cartoes = document.getElementById("cartoes");
  console.log(cartoes);

  cartoes.innerHTML = data.viewer
    .map((item) => {
      return `<div class=${item.moderador == 1 ? "cardDourado" : "card"}>
            <img src="${item.foto}" alt="Imgem do usuario">
            <div class="corpo-cartao">
                <h2>${item.nick}</h2>
                <h3>${item.nome}</h3>
                <p>Moderador: ${item.moderador == 1 ? "sim" : "não"}</p>
                <button onclick="location.href='vermais.html?id=${
                  item.id
                }'"> Ver mais </button>
            </div>
        </div>`;
    })
    .join("");
}
carregaDados();

async function carregaTipo() {
  const response = await fetch("http://localhost:3003/tipos");
  const data = await response.json();
  console.log(data);
  const tipos = data.allTipos;
  const opcoes = document.getElementById("tipo_id");
  console.log(opcoes);
  opcoes.innerHTML = tipos
    .map((tp) => {
      return `
    <option value="${tp.id}">${tp.descricao}
    `;
    })
    .join("");
}
carregaTipo();

const form = document.getElementById("myForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const nick = document.getElementById("nick").value;
  const tipo_id = +document.getElementById("tipo_id").value;
  const foto = document.getElementById("foto").value;

  const moderador =
    document.querySelector("input[name='moderador']:checked").value === "sim"
      ? 1
      : 0;

  const viewer = {
    nome,
    nick,
    tipo_id,
    foto,
    moderador,
  };

  const response = await fetch("http://localhost:3003/viewer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(viewer),
  });

  if (response.ok) {
    alert("Deu certo!!!!");
  } else {
    alert("Algo deu errado");
  }
});



https://developer.mozilla.org/pt-BR/docs/Web/API/Window/location 
//ir atras
window.location.href    