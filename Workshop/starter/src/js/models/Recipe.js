export default class Recipe {
    constructor(recipe) {
        this.title = recipe.title;
        this.image_url = recipe.image_url;
        this.source_url = recipe.source_url;
        this.publisher = recipe.publisher;
        this.ingredients = this.parseIngredients(recipe.ingredients);

    }

    parseIngredients(ingredients) {
        let ing = ingredients.map(e => {
            let split = e.split(' ');
            return {
                cant: eval(split[0]),
                unit: split[1],
                name: split.slice(2, split.length - 1).join(' ')
            }
        });
        return ing;
        
    }
}