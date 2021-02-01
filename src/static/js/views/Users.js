import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Users");
    }

    async getHtml() {
        return `
            <h1>Users Works!</h1>
            <ul>
                <li><a href="/users/1" data-link>User 1</a></li>
                <li><a href="/users/2" data-link>User 2</a></li>
            </ul>
        `;
    }
}