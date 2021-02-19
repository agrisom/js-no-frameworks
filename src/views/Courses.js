import AbstractView from "./AbstractView.js";
import UserService from "../js/UserService.js"
import '../components/MyBadge.js';

export default class Users extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column">
                    <h1>Courses</h1>
                    <div class="table-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="course-list">
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        `;
    }
    
    constructor() {
        super();
        this.setTitle("Courses");
        
        const userService = new UserService();
        userService.getAll().then(courses => {
            const courseList = document.getElementById("course-list");
            courseList.innerHTML = this.listOfCourses(courses);
        });
    }

    listOfCourses(courses) {
        const rows = courses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.gender }</td>
                <td>
                    <my-badge pos="${course.age}" ${course.age<18 ? 'danger':''}>
                        <span>Alerts</span>
                        <span slot="remove">(X)</span>
                    </my-badge>
                </td>
                <td><a href="/course/${course.id}" data-link>Edit</a></td>
            </tr>
        `).join("\n");
        return rows;
    }
}