import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column column-center center">
                <h1 class="i18nstring" data-message="com.thelittlepot.error.404.title"></h1>
                <p class="i18nstring" data-message="com.thelittlepot.error.404.desc"></p>
                <img alt="404" src="/assets/loop_color.gif" style="filter: grayscale(100%) brightness(140%)"/>
                    <p class="i18nstring" data-message="com.thelittlepot.error.404.code"></p>
                </div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("com.thelittlepot.title.error");
    }
}