import CoursesView from "/views/Courses.js";
import CourseView from "/views/Course.js";
import HomeView from "/views/Home.js";
import ErrorView from "/views/Error.js";
import LogInView from "/views/Login.js";
import SignUpView from "/views/Signup.js";
import ComponentsView from "/views/Components.js";
import CatalogView from "/views/Catalog.js";
import LangService from "/js/LangService.js";

const selectLanguage = lang => {
    let suportedLanguages = ["en", "ca", "es"];
    let element = document.getElementById("language_select");
    element.value = suportedLanguages.includes(lang) ? lang : suportedLanguages[0];
    localStorage.setItem("language", element.value);
};
selectLanguage(localStorage.getItem("language") || navigator.language.substring(0, 2));
const langService = new LangService();

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/error", view: ErrorView },
        { path: "/", view: HomeView },
        { path: "/home", view: HomeView },
        { path: "/courses", view: CoursesView },
        { path: "/course/:id", view: CourseView },
        { path: "/login", view: LogInView },
        { path: "/signup", view: SignUpView},
        { path: "/about", view: ComponentsView},
        { path: "/catalog", view: CatalogView}
    ];

    // Test each routes for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
    langService.refreshLanguage();

    document.getElementById("nav-links").childNodes.forEach(ul => {
        if (ul.nodeName == "LI") {
            ul.firstChild.classList.remove("active");
            if(ul.firstChild.href.endsWith(match.route.path)) {
                ul.firstChild.classList.add("active");
            }
        }
    });
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        var closest = e.target.closest("[data-link]");
        
        if (closest) {
            e.preventDefault();
            navigateTo(closest.href);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    });
    router();
});

document.querySelector("#language_select").addEventListener("change", (event) => {
    localStorage.setItem("language", event.target.value);
    langService.refreshLanguage();
});