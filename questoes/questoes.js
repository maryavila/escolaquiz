const materiaPorDisciplina = {
  Matemática: ["Álgebra", "Geometria", "Estatística"],
  "Ciências da Natureza": ["Física", "Química", "Biologia"],
  "Ciências Humanas": ["História", "Geografia", "Filosofia", "Sociologia"],
  Linguagens: ["Português", "Inglês", "Espanhol"],
};

const questoes = {
  Física: [
    "O que é velocidade média?",
    "Qual a fórmula da segunda lei de Newton?",
  ],
  História: ["Quem descobriu o Brasil?", "O que foi a Revolução Francesa?"],
  // Adicione mais questões por matéria aqui
};

const disciplinaSelect = document.getElementById("disciplinaSelect");
const materiaSelect = document.getElementById("materiaSelect");
const questoesContainer = document.getElementById("questoesContainer");

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

  if (questoes[materia]) {
    questoes[materia].forEach((q) => {
      const div = document.createElement("div");
      div.classList.add("questao");
      div.textContent = q;
      questoesContainer.appendChild(div);
    });
  } else {
    questoesContainer.innerHTML =
      "<p>Nenhuma questão disponível para esta matéria.</p>";
  }
});
