export default class LangService {
    constructor() {
    }
    
    async refreshLanguage() {
        console.log(localStorage.getItem("language"));
        this.getLanguage(localStorage.getItem("language")).then(languageLabels => {
            
            document.querySelectorAll('.i18nstring').forEach(function(element) {
                if(element.nodeName.match("INPUT") != null) {
                    element.placeholder = languageLabels[element.dataset.message] || element.placeholder;
                    element.title = languageLabels[element.dataset.message] || element.title;
                }
                element.innerHTML = languageLabels[element.dataset.message] || element.textContent;
            });
        });
    };

    async getLanguage(language) {
        const api_url = "/language/resources_" + language + ".json";
        const response = await fetch(api_url);
        const data = await response.json();
        return data;
    }

    async getText(label) {
        const response = await this.getLanguage(localStorage.getItem("language"))
        const data = await response[label] || "";
        return data;
    }
}