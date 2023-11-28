class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <header>
          <h1>¡Bienvenido al Sistema Modular!</h1>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  