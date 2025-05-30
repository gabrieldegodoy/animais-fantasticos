import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJSON.forEach(i => {
        const divAnimal = createAnimal(i);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    };
  }

  function createAnimal(i) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${i.especie}</h3><span data-numero>${i.total}</span>`
    
    return div
  }

  fetchAnimais('./animaisapi.json');
}