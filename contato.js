const abasMotivo = document.querySelectorAll(".aba-motivo");
const inputMotivo = document.getElementById("motivo");
const listaOpcoes = document.getElementById("lista-opcoes");

let motivoPrincipal = "Quero fazer um site";
let motivoFinal = motivoPrincipal;

inputMotivo.value = motivoPrincipal;

abasMotivo.forEach((aba) => {
  aba.addEventListener("click", () => {
    abasMotivo.forEach((a) => a.classList.remove("ativo"));
    aba.classList.add("ativo");

    motivoPrincipal = aba.dataset.motivo;
    motivoFinal = motivoPrincipal;
    inputMotivo.value = motivoFinal;

    if (motivoPrincipal === "Quero fazer um site") {
      listaOpcoes.style.display = "block";
    } else {
      listaOpcoes.style.display = "none";
    }
  });
});

inputMotivo.addEventListener("click", () => {
  if (motivoPrincipal === "Quero fazer um site") {
    listaOpcoes.style.display =
      listaOpcoes.style.display === "block" ? "none" : "block";
  }
});

document.querySelectorAll(".lista-opcoes .opcao").forEach((opcao) => {
  opcao.addEventListener("click", () => {
    motivoFinal = opcao.dataset.motivo;
    inputMotivo.value = motivoFinal;
    listaOpcoes.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!inputMotivo.parentNode.contains(e.target)) {
    listaOpcoes.style.display = "none";
  }
});

function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const telefone = "5521998425824";

  if (!nome || !motivoFinal || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const texto = `Olá! Me chamo ${nome}. Motivo: ${motivoFinal}. Mensagem: ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}
