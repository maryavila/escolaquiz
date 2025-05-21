// Função para abrir o modal do simulado
function abrirSimulado() {
  const modal = document.getElementById("modalSimulado");
  modal.style.display = "flex";
  // Colocar foco no primeiro checkbox para acessibilidade
  const primeiroCheckbox = modal.querySelector('input[name="materias"]');
  if (primeiroCheckbox) primeiroCheckbox.focus();
}

// Função para fechar o modal do simulado
function fecharSimulado() {
  document.getElementById("modalSimulado").style.display = "none";
}

// Função para iniciar o simulado com matérias selecionadas
function iniciarSimulado() {
  const checkboxes = document.querySelectorAll(
    'input[name="materias"]:checked'
  );
  const materiasSelecionadas = Array.from(checkboxes).map((cb) => cb.value);

  if (materiasSelecionadas.length === 0) {
    alert("Selecione pelo menos uma matéria.");
    return;
  }

  // Exemplo: aqui você pode enviar os dados para o backend ou redirecionar a página
  console.log("Matérias escolhidas:", materiasSelecionadas);
  alert("Simulado com: " + materiasSelecionadas.join(", "));

  fecharSimulado();
}

// Configura eventos ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  // Abrir modal pode ser disparado por algum botão, exemplo:
  // document.getElementById("botaoAbrirSimulado").addEventListener("click", abrirSimulado);

  // Fecha modal ao clicar no X (já tem no HTML onclick, mas ideal usar JS)
  const btnFechar = document.querySelector(".close");
  if (btnFechar) {
    btnFechar.addEventListener("click", fecharSimulado);
  }

  // Fecha modal ao clicar fora da caixa (fora da .modal-content)
  const modal = document.getElementById("modalSimulado");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharSimulado();
    }
  });

  // Botão iniciar simulado
  const btnIniciar = document.querySelector(
    "#formSimulado button[type='button']"
  );
  if (btnIniciar) {
    btnIniciar.addEventListener("click", iniciarSimulado);
  }
});
