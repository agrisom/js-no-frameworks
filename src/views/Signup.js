import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column column-center">
                    <h1>Sign Up</h1>
                    <input class="large" type="text" placeholder="Email" title="Email" name="username" />
                    <input class="medium" type="text" placeholder="Name" title="Name" name="name" />
                    <input class="medium" type="text" placeholder="Surnames" title="Surnames" name="surnames" />
                    <input class="large" type="password" placeholder="Password" title="Password" name="password" />
                    <input class="large" type="password" placeholder="Repeat Password" title="Repeat Password" name="password2" />
                    <button class="btn btn-primary large" type="submit">Sign Up</button>
                    <p>Already have an account? <a href="/login" data-link>Log in</a></p>
                </div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("Log In");
    }
}