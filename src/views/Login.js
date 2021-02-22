import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column column-center">
                    <h1 class="i18nstring" data-message="com.thelittlepot.login.tile"></h1>
                    <input class="large i18nstring" data-message="com.thelittlepot.login.form.email" type="text" name="username" />
                    <input class="large i18nstring" data-message="com.thelittlepot.login.form.password" type="password" name="password" />
                    <button class="btn btn-primary large i18nstring" data-message="com.thelittlepot.login.form.submit" type="submit"></button>
                    <p class="i18nstring" data-message="com.thelittlepot.login.content"></p>
                </div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("com.thelittlepot.title.login");
    }
}