
class homelink extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <li><a class="active" href="#Home">Home</a></li>
       `;
	}
}
customElements.define('app-home', homelink);



class aboutlink extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
     <li><a href="#about">About</a></li>
       `;
	}
}
customElements.define('app-about', aboutlink);


class servicelink extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
    <li><a href="#services">Services</a></li>
       `;
	}
}
customElements.define('app-service', servicelink);


class contactlink extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
    <li><a href="https://twitter.com/explore">Contact us</a></li>
       `;
	}
}
customElements.define('app-contact', contactlink);


