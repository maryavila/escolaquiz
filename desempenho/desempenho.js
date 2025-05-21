document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("graficoDesempenho").getContext("2d");

  const grafico = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Matemática",
        "Física",
        "Química",
        "História",
        "Geografia",
        "Biologia",
      ],
      datasets: [
        {
          label: "Acertos",
          backgroundColor: "#4caf50",
          data: [10, 8, 6, 4, 5, 7],
        },
        {
          label: "Erros",
          backgroundColor: "#f44336",
          data: [2, 3, 1, 6, 4, 2],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
