import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <h1>Error 404</h1>
            <p>
                Page Not Found
            </p>
        `;
    }

    constructor() {
        super();
        this.setTitle("404 - Page Not Found");
    }
}