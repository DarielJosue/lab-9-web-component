class PosterAulas extends HTMLElement {
    #aulasData = [];

    constructor() {
        super();
    }

    connectedCallback() {
        // 1. Primero creamos el HTML base
        this.render();
        // 2. Luego, si ya hay datos guardados, los pintamos
        this.#updateTexts();
    }

    set aulasData(nuevosDatos) {
        this.#aulasData = nuevosDatos;
        if (this.isConnected) {
            this.#updateTexts();
        }
    }

    get aulasData() {
        return this.#aulasData;
    }

    #updateTexts() {
        const spansText = this.querySelectorAll('.sign-text');
        const spansDouble = this.querySelectorAll('.sign-text-double span');
        const spanUcr = this.querySelector('.ucr-text');

        if (spansText[0]) spansText[0].textContent = this.#aulasData[0] || '';
        if (spansText[1]) spansText[1].textContent = this.#aulasData[1] || '';
        if (spansText[2]) spansText[2].textContent = this.#aulasData[2] || '';
        if (spansText[3]) spansText[3].textContent = this.#aulasData[3] || '';

        if (spansDouble[0]) spansDouble[0].textContent = this.#aulasData[4] || '';
        if (spansDouble[1]) spansDouble[1].textContent = this.#aulasData[5] || '';

        if (spanUcr) spanUcr.textContent = this.#aulasData[6] || '';

    }

    render() {
        this.setHTMLUnsafe(`
    <div class="sign-panel">

        <div class="sign-row">
            <span class="sign-text"></span>
            <span class="sign-arrow">→</span>
        </div>
        
        <div class="sign-row">
            <span class="sign-text"></span>
            <span class="sign-arrow">→</span>
        </div>

        <div class="sign-row">
            <span class="sign-text"></span>
            <span class="sign-arrow">→</span>
        </div>

        <div class="sign-row">
            <span class="sign-text"></span>
            <span class="sign-arrow">→</span>
        </div>

        <div class="sign-row sign-row-double">
            <div class="sign-text-double">
            <span></span>
            <span></span>
            </div>
            <span class="sign-arrow">→</span>
        </div>

        <div class="sign-footer">
            <span class="ucr-text"> </span>
        </div>
    </div>
        `);
    }
}

customElements.define("poster-aulas", PosterAulas);