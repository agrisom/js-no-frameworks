import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column column-center">
                    <h1>Log In</h1>
                    <input class="large" type="text" placeholder="Email" title="Email" name="username" />
                    <input class="large" type="password" placeholder="Password" title="Password" name="password" />
                    <button class="btn btn-primary large" type="submit">Log In</button>
                    <p>Don't have an account? <a href="/signup" data-link>Sign up</a></p>
                </div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("Log In");
    }
}