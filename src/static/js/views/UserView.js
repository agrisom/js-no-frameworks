import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("User " + this.params.id);
    }

    async getHtml() {
        return `
            <div class="breadcrumb">
                <a href="/users" data-link>Users</a>
                > User ${this.params.id}
            </div>
            <h1>User ${this.params.id}!</h1>
        `;
    }
}