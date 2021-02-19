export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = "The Little Pot" + (title ? " - " + title : "");
    }

    async getHtml() {
        return "";
    }
}