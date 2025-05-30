// SCROLL SUAVE LINK INTERNO
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  if(linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      
      //Forma Alternativa
      /*const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: 'smooth',
      });*/

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
