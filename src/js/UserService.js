export default class UserService {
    constructor() {
        
    }

    async getAll() {
        const api_url = "https://ghibliapi.herokuapp.com/people";
        const response = await fetch(api_url);
        const data = await response.json();
        return data;
    }

    async getById(id) {
        const api_url = `https://ghibliapi.herokuapp.com/people/${id}`;
        const response = await fetch(api_url);
        const data = await response.json();
        return data;
    }
}