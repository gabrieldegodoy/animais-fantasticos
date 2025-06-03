import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Preenche a cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera resposta
      const animaisResponse = await fetch(url);
      // Transforma resposta em json
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  // Cria a div contendo informações com o total de animais
  function createAnimal(i) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${i.especie}</h3><span data-numero>${i.total}</span>`;

    return div;
  }

  return criarAnimais();
}
