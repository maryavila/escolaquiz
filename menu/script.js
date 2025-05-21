// Atualiza o streak de dias consecutivos com base no último acesso
function atualizarStreak() {
  const hoje = new Date().toDateString();
  const ultimoDia = localStorage.getItem("ultimoAcesso");
  let streak = parseInt(localStorage.getItem("streak"), 10) || 0;

  if (ultimoDia !== hoje) {
    const ontem = new Date();
    ontem.setDate(ontem.getDate() - 1);
    const ontemStr = ontem.toDateString();

    if (ultimoDia === ontemStr) {
      streak += 1; // Continua a sequência
    } else {
      streak = 1; // Reinicia a sequência
    }

    localStorage.setItem("ultimoAcesso", hoje);
    localStorage.setItem("streak", streak);
  }

  const streakCountElem = document.getElementById("streak-count");
  if (streakCountElem) {
    streakCountElem.textContent = streak;
  }
}

window.onload = function () {
  atualizarStreak();

  const searchBtn = document.getElementById("search-btn");
  const searchBar = document.getElementById("search-bar");

  if (searchBtn && searchBar) {
    searchBtn.addEventListener("click", () => {
      searchBar.classList.toggle("active");
      if (searchBar.classList.contains("active")) {
        searchBar.focus();
      }
    });
  }
};
