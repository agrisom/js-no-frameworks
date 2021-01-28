import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Home Works!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque laoreet quam, non pharetra nulla pulvinar vel. Nullam varius facilisis porttitor. Donec bibendum dui ac elit malesuada posuere. Morbi faucibus consectetur convallis. Aenean in dui iaculis elit condimentum molestie. Mauris non nunc sed leo blandit luctus non at erat. Sed id imperdiet magna, non fermentum libero. Fusce magna justo, feugiat non consequat eget, luctus sollicitudin sapien. Maecenas mollis, turpis semper fermentum blandit, ex turpis scelerisque tellus, vitae aliquam sapien eros pretium enim. Nam ex ipsum, ornare quis mattis vulputate, sagittis convallis neque. Aenean vel ligula ac velit pharetra molestie ut nec lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac semper neque. Vestibulum faucibus hendrerit arcu ac dictum. Nam dui nisi, hendrerit quis ex nec, faucibus euismod elit. Nam nec lectus non nisl lacinia malesuada sit amet at purus.

                Nullam mattis ex eu turpis sodales, vitae tempus diam suscipit. Cras nec hendrerit nunc. Nam bibendum rhoncus vestibulum. Aenean rhoncus nunc pharetra, tempor nisl non, ultrices ipsum. Sed tempor vehicula neque. Phasellus sodales cursus mauris, vel fringilla tortor facilisis vitae. Nullam arcu leo, sodales sit amet lobortis vel, blandit nec dui.

                In nec purus ac lorem sodales egestas. In non mauris eu diam ultrices tempus. Proin in leo odio. Nulla facilisi. Suspendisse vel velit lorem. Suspendisse pretium mi at lacus imperdiet feugiat. Aliquam facilisis est porta nisl hendrerit, a hendrerit est condimentum. Curabitur sit amet efficitur nisl. Quisque at dolor mauris.

                Nam rhoncus pretium magna eu vestibulum. Pellentesque aliquet porttitor lacus, at pulvinar ligula ultricies at. Vivamus elementum, felis sit amet iaculis vehicula, tellus arcu viverra orci, sit amet efficitur diam magna eu quam. Curabitur ac lorem leo. Nulla facilisi. Fusce aliquam efficitur mi, quis faucibus augue sollicitudin at. Nullam vel fringilla nibh. Donec lacinia sodales tristique. Aenean elit arcu, bibendum ac mollis consectetur, suscipit eu nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec ipsum vel libero mollis hendrerit ut non leo. Donec venenatis at felis ac aliquet. Nunc nec elit urna.

                Phasellus ex sapien, ultrices et lorem eget, venenatis auctor est. Phasellus sapien metus, pretium nec aliquam sed, laoreet ut purus. Nullam vel suscipit nulla. Vestibulum quis scelerisque nisi. Ut lacus lacus, cursus quis est in, pretium lacinia arcu. Sed a lectus at diam placerat ullamcorper in ac urna. Sed aliquam venenatis consectetur. Donec rhoncus, arcu sit amet viverra venenatis, urna orci fermentum ex, nec tincidunt arcu sapien in ipsum. Pellentesque consequat sodales vestibulum. Donec nisi neque, mollis in ultricies vel, condimentum ut justo. Sed eu mauris magna.
            </p>
        `;
    }
}