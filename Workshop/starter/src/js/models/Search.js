import Service from '../mocks/service-mock.js';

export default class Search {
    constructor(title) {
        this.title = title;
    }

    async searchRecipe() {
        return Service.getRecipes();
    }
}