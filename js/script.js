document.querySelector(".cabeca").addEventListener("click", async function (e) {
    e.preventDefault();

    abrirModal("descricao aqui")

});


function abrirModal(mensagem) {
    document.getElementById("idDoModal").style.display = "block";
    document.getElementById("mensagem").innerText=mensagem;
  }

  
  document.querySelector("#fecharModal").addEventListener("click", async function (e) {
    e.preventDefault();
    fecharModal()
});
  function fecharModal() {
    document.getElementById("idDoModal").style.display = "none";
  }