class project_card extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const container = document.createElement('a');

        const image = document.createElement('img');
        container.appendChild(image);

        const description = document.createElement('p');
        container.appendChild(description);

        const style_link = document.createElement('link');
        style_link.setAttribute('rel', 'stylesheet');
        style_link.setAttribute('href', './styles.css');

        shadow.appendChild(container);
        shadow.appendChild(stylesheet)
    }

    set data(data) {
        self.data = data;
        const container_link = this.shadowRoot.querySelector('a');
        container_link.setAttribute('href', data.link);
        
        const image = this.shadowRoot.querySelector('img');
        image.setAttribute('src', data.image);

        const description = this.shadowRoot.querySelector('p');
        description.innerHTML = data.description;
    }
}