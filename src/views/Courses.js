import AbstractView from "./AbstractView.js";
import UserService from "../js/UserService.js"
import '../components/MyBadge.js';
import LangService from "../js/LangService.js";

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
                                    <th class="i18nstring" data-message="com.thelittlepot.courses.table.name"></th>
                                    <th class="i18nstring" data-message="com.thelittlepot.courses.table.gender"></th>
                                    <th class="i18nstring" data-message="com.thelittlepot.courses.table.age"></th>
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
        this.setTitle("com.thelittlepot.title.courses");
        
        const userService = new UserService();
        userService.getAll().then(courses => {
            const courseList = document.getElementById("course-list");
            courseList.innerHTML = this.listOfCourses(courses);
            new LangService().refreshLanguage();
        });
    }

    listOfCourses(courses) {
        const rows = courses.map(course => `
            <tr>
                <td>${course.name}</td>
                <td>${course.gender }</td>
                <td>
                    <my-badge pos="${course.age}" ${course.age<18 ? 'danger':''}>
                        <span class="i18nstring" data-message="com.thelittlepot.courses.alerts"></span>
                        <span slot="remove">(X)</span>
                    </my-badge>
                </td>
                <td><a href="/course/${course.id}" data-link  class="i18nstring" data-message="com.thelittlepot.courses.table.edit"></a></td>
            </tr>
        `).join("\n");
        return rows;
    }
}