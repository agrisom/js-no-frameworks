import AbstractView from "./AbstractView.js";
import UserService from "./../js/UserService.js"
import '../components/MyBadge.js';

export default class Users extends AbstractView {
    async getHtml() {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="user-list">
                </tbody>
            </table>
            `;
    }
    
    constructor() {
        super();
        this.setTitle("Users");
        
        const userService = new UserService();
        userService.getAll().then(users => {
            const userList = document.getElementById("user-list");
            userList.innerHTML = this.listOfUsers(users);
        });
    }

    listOfUsers(users) {
        const rows = users.map(user => `
            <tr>
                <td>${user.name}</td>
                <td>${user.gender }</td>
                <td>
                    <my-badge pos="${user.age}" ${user.age<18 ? 'danger':''}>
                        <span>Alerts</span>
                        <span slot="remove">(X)</span>
                    </my-badge>
                </td>
                <td><a href="/user/${user.id}" data-link>Edit</a></td>
            </tr>
        `).join("\n");
        return rows;
    }
}