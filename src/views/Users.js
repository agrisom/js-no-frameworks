import AbstractView from "./AbstractView.js";
import '../components/MyBadge.js'

export default class Users extends AbstractView {
    async getHtml() {
        return `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Surnames</th>
                    <th>Alerts</th>
                    <th></th>
                </tr>
                ${this.params.map(this.userTemplate).join("")}
            </table>
        `;
    }
    
    constructor() {
        super();
        this.setTitle("Users");
        const user = {
            id: 1,
            name: "Albert",
            surnames: "Griso Mendez",
            alerts: 15
        };
        const user2 = {
            id: 2,
            name: "Arnau",
            surnames: "Lopez",
            alerts: 3
        };
        this.params = [user, user2];
        console.log("constructor loaded");
    }

    userTemplate = (user) => {
        return `
            <tr>
                <td>${user.name}</td>
                <td>${user.surnames }</td>
                <td>
                    <my-badge pos="${user.alerts}" ${user.alerts>10 ? 'danger':''}>
                        <span>Alerts</span>
                        <span slot="remove">(X)</span>
                    </my-badge>
                </td>
                <td><a href="/user/${user.id}">Edit</a></td>
            </tr>
        `;
    }
}