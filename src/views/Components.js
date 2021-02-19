import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    async getHtml() {
        return `
            <section>
                <div class="column">
                    <h1>Home Works!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque laoreet quam, non pharetra nulla pulvinar vel. Nullam varius facilisis porttitor. Donec bibendum dui ac elit malesuada posuere. Morbi faucibus consectetur convallis. Aenean in dui iaculis elit condimentum molestie. Mauris non nunc sed leo blandit luctus non at erat. Sed id imperdiet magna, non fermentum libero. Fusce magna justo, feugiat non consequat eget, luctus sollicitudin sapien. Maecenas mollis, turpis semper fermentum blandit, ex turpis scelerisque tellus, vitae aliquam sapien eros pretium enim. Nam ex ipsum, ornare quis mattis vulputate, sagittis convallis neque. Aenean vel ligula ac velit pharetra molestie ut nec lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac semper neque. Vestibulum faucibus hendrerit arcu ac dictum. Nam dui nisi, hendrerit quis ex nec, faucibus euismod elit. Nam nec lectus non nisl lacinia malesuada sit amet at purus.

                        Nullam mattis ex eu turpis sodales, vitae tempus diam suscipit. Cras nec hendrerit nunc. Nam bibendum rhoncus vestibulum. Aenean rhoncus nunc pharetra, tempor nisl non, ultrices ipsum. Sed tempor vehicula neque. Phasellus sodales cursus mauris, vel fringilla tortor facilisis vitae. Nullam arcu leo, sodales sit amet lobortis vel, blandit nec dui.
                    </p>
                    <button class="btn btn-primary">Button</button>
                    <button class="btn btn-secondary">Cancel</button>
                    <button class="btn btn-danger">Delete</button>
                    <a href="/signup" data-link class="btn btn-primary">Sign up</a>
                </div>
            </section>
            <section>
                <div class="column">
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                </div>
            </section>
            <section>
                <div class="column">1 Column</div>
            </section>
            <section>
                <div class="column">2-1 Column</div>
                <div class="column">2-2 Column</div>
            </section>
            <section>
                <div class="column">3-1 Column</div>
                <div class="column">3-2 Column</div>
                <div class="column">3-3 Column</div>
            </section>
            <section>
                <div class="column">4-1 Column</div>
                <div class="column">4-2 Column</div>
                <div class="column">4-3 Column</div>
                <div class="column">4-4 Column</div>
            </section>
            <section>
                <div class="column">4-1 Column</div>
                <div class="column">4-2 Column</div>
                <div class="column">4-3 Column</div>
                <div class="column">4-4 Column</div>
                <div class="column">4-5 Column</div>
            </section>
        `;
    }

    constructor() {
        super();
        this.setTitle("Home");
    }
}