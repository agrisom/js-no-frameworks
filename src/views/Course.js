import AbstractView from "./AbstractView.js";
import UserService from "../js/UserService.js"

export default class extends AbstractView {
    async getHtml() {
        return `
            <div class="breadcrumb">
                <a href="/courses" data-link>Courses</a>
                > <span id="course-name" />
            </div>
            <div id="course-content"></div>
        `;
    }

    constructor(params) {
        super(params);
        
        const userService = new UserService();
        userService.getById(this.params.id).then(course => {
            this.setTitle("Course : " + course.name);
            const courseContent = document.getElementById("course-content");
            courseContent.innerHTML = this.mapCourse(course);
            document.getElementById("course-name").innerHTML = course.name;
        });
    }

    mapCourse(course) {
        return `
            <h1>${course.name}</h1>
            <p>${JSON.stringify(course)}</p>
        `;
    }
}