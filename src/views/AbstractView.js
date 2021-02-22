import LangService from "/js/LangService.js";

export default class {
    constructor(params) {
        this.params = params;
        this.langService = new LangService();
    }

    async setTitle(title, text) {
        this.langService.getText(title).then(response => {
            document.title = "The Little Pot" + (response ? " - " + response : "") + (text ? " : " + text : "");
        });
    }

    async getHtml() {
        return "";
    }
}