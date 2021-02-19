import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column column-center center">
                <h1>Oops!!</h1>
                <p>We can't find the page you're looking for.<br><a href="/" data-link>Go back home</a></p>
                <img alt="404" src="/assets/loop_color.gif" style="filter: grayscale(100%) brightness(138%)"/>
                    <p>
                        404 Page Not Found
                    </p>
                </div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("Page Not Found");
    }
}