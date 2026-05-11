class PosterAcoso extends HTMLElement {
    #datosPoster = [];

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.#updatetexts();
    }


    set datosPoster(nuevosDatos) {
        this.#datosPoster = nuevosDatos;
        if (this.isConnected) {
            this.#updatetexts();
        }
    }


    get datosPoster() {
        return this.#datosPoster;
    }

    #updatetexts() {

        const exc1 = this.querySelector('.exc1');
        const titulo1 = this.querySelector('.titulo-1');
        const titulo2 = this.querySelector('.titulo-2');
        const titulo3 = this.querySelector('.titulo-3');
        const exc2 = this.querySelector('.exc2');

        const subtitulo1 = this.querySelector('.sub-titulo1');
        const subtitulo2 = this.querySelector('.sub-titulo2');

        const qrLabel = this.querySelector('.qr-label');

        const logos = this.querySelectorAll('.logo-item');


        if (exc1) exc1.textContent = this.#datosPoster[0] || '';
        if (titulo1) titulo1.textContent = this.#datosPoster[1] || '';
        if (titulo2) titulo2.textContent = this.#datosPoster[2] || '';
        if (titulo3) titulo3.textContent = this.#datosPoster[3] || '';
        if (exc2) exc2.textContent = this.#datosPoster[4] || '';

        if (subtitulo1) subtitulo1.textContent = this.#datosPoster[5] || '';
        if (subtitulo2) subtitulo2.textContent = this.#datosPoster[6] || '';

        if (qrLabel) qrLabel.textContent = this.#datosPoster[7] || '';

        if (logos[0]) logos[0].textContent = this.#datosPoster[8] || '';
        if (logos[1]) logos[1].textContent = this.#datosPoster[9] || '';
        if (logos[2]) logos[2].textContent = this.#datosPoster[10] || '';


    }

    render() {
        this.setHTMLUnsafe(`
    <div class="poster">

        <div class="title-block">

        <div class="title-line">
            <span class="exc1"></span>
            <span class="titulo-1"></span>
        </div>

        <div class="title-line">
            <span class="titulo-2"></span>
            <span class="titulo-3"></span>
            <span class="exc2"></span>
        </div>
        </div>

        <div class="message-block">
        <p class="sub-titulo1"></p>
        <p class="sub-titulo2"></p>
        </div>

        <div class="qr-section">
        <p class="qr-label"></p>
        <div class="qr-css" aria-label="Código QR generado con CSS">
            <div class="qr-grid"></div>
        </div>
        </div>

        <div class="image-container">
        <img src="assets/images/imagen.png" alt="Personas" class="people-img">

        <div class="logos-overlay">
            <div class="logo-item"></div>
            <div class="logo-item"></div>
            <div class="logo-item"></div>
        </div>
        </div>

    </div>
    `);
    }
}

customElements.define("poster-acoso", PosterAcoso);