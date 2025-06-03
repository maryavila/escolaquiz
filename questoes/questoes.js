const disciplinaSelect = document.getElementById("disciplinaSelect");
const materiaSelect = document.getElementById("materiaSelect");
const questoesContainer = document.getElementById("questoesContainer");

const materiaPorDisciplina = {
  Matemática: ["Álgebra", "Geometria", "Estatística"],
  Biologia: ["Genética", "Ecologia", "Fisiologia"],
  Química: ["Química Orgânica", "Fisico-Química", "Química Geral"],
  Linguagens: ["Português", "Inglês", "Espanhol"],
  Física: ["Cinemática", "Dinâmica", "Óptica"],
  História: ["História do Brasil", "História Geral"],
  Filosofia: ["Ética", "Filosofia Moderna"],
  Sociologia: ["Sociologia Clássica", "Sociologia Contemporânea"],
};

disciplinaSelect.addEventListener("change", () => {
  const disciplina = disciplinaSelect.value;
  materiaSelect.innerHTML = '<option value="">Selecione a matéria</option>';
  questoesContainer.innerHTML = "";

  if (disciplina && materiaPorDisciplina[disciplina]) {
    materiaSelect.disabled = false;
    materiaPorDisciplina[disciplina].forEach((materia) => {
      const option = document.createElement("option");
      option.value = materia;
      option.textContent = materia;
      materiaSelect.appendChild(option);
    });
  } else {
    materiaSelect.disabled = true;
  }
});

materiaSelect.addEventListener("change", () => {
  const materia = materiaSelect.value;
  questoesContainer.innerHTML = "";

  if (materia) {
    fetch(
      `http://localhost:5000/escolaquiz?materia=${encodeURIComponent(materia)}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          questoesContainer.innerHTML =
            "<p>Nenhuma questão disponível para esta matéria.</p>";
          return;
        }

        data.forEach((questao) => {
          const questaoDiv = document.createElement("div");
          questaoDiv.classList.add("questao");

          const enunciado = document.createElement("p");
          enunciado.textContent = questao.enunciado;

          questaoDiv.appendChild(enunciado);

          const alternativasList = document.createElement("ul");

          questao.alternativas.forEach((alt) => {
            const item = document.createElement("li");
            item.textContent = `${alt.letra}) ${alt.texto}`;
            alternativasList.appendChild(item);
          });

          questaoDiv.appendChild(alternativasList);

          questoesContainer.appendChild(questaoDiv);
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar questões:", error);
        questoesContainer.innerHTML = "<p>Erro ao carregar questões.</p>";
      });
  }
});
