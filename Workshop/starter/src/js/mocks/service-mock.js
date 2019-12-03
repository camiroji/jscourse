import {recipesResponseMock} from './recipes-response-mock.js';
import {recipe} from './recipe-description-response-mock.js';

export default class Service {

    static async getRecipes(url) {
        return recipesResponseMock;
    }

    static async getRecipe() {
        return recipe;
    }
}