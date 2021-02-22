import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column column-center">
                    <h1 class="i18nstring" data-message="com.thelittlepot.signup.tile"></h1>
                    <input class="large i18nstring" data-message="com.thelittlepot.signup.form.email" type="text" name="username" />
                    <input class="medium i18nstring" data-message="com.thelittlepot.signup.form.name" type="text"name="name" />
                    <input class="medium i18nstring" data-message="com.thelittlepot.signup.form.surnames" type="text" name="surnames" />
                    <input class="large i18nstring" data-message="com.thelittlepot.signup.form.password" type="password" name="password" />
                    <input class="large i18nstring" data-message="com.thelittlepot.signup.form.password2" type="password" name="password2" />
                    <button class="btn btn-primary large i18nstring" data-message="com.thelittlepot.signup.form.submit" type="submit"></button>
                    <p class="i18nstring" data-message="com.thelittlepot.signup.content"></p>
                </div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("com.thelittlepot.title.signup");
    }
}