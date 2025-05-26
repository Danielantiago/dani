function mostrarCategoria(nome) {
  const categorias = document.querySelectorAll(".categoria");
  categorias.forEach((cat) => cat.classList.remove("ativa"));

  const abaAtiva = document.getElementById("galeria-" + nome);
  abaAtiva.classList.add("ativa");

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  const botaoClicado = Array.from(tabs).find((tab) =>
    tab.textContent.toLowerCase().includes(nome)
  );
  if (botaoClicado) botaoClicado.classList.add("active");
}

// Lightbox
document.querySelectorAll(".galeria-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
