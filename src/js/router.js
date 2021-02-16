import UsersView from "/views/Users.js";
import UserView from "/views/User.js";
import HomeView from "/views/Home.js";
import ErrorView from "/views/Error.js";

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
        { path: "/users", view: UsersView },
        { path: "/user/:id", view: UserView }
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
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        var closest = e.target.closest("[data-link]");
        
        if (closest) {
            e.preventDefault();
            navigateTo(closest.href);
        };
    });
    router();
});