import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    // Define touchstart e click como argumento padrão de events caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.active = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.active);
    this.menuList.classList.add(this.active);
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.active);
      this.menuList.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
