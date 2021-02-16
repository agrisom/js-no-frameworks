import AbstractView from "./AbstractView.js";
import UserService from "./../js/UserService.js"

export default class extends AbstractView {
    async getHtml() {
        return `
            <div class="breadcrumb">
                <a href="/users" data-link>Users</a>
                > <span id="user-name" />
            </div>
            <div id="user-content"></div>
        `;
    }

    constructor(params) {
        super(params);
        this.setTitle("User " + this.params.id);

        const userService = new UserService();
        userService.getById(this.params.id).then(user => {
            const userContent = document.getElementById("user-content");
            userContent.innerHTML = this.mapUser(user);
            document.getElementById("user-name").innerHTML = user.name;
        });
    }

    mapUser(user) {
        return `
            <h1>${user.name}</h1>
            <p>${JSON.stringify(user)}</p>
        `;
    }
}