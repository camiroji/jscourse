import Service from './mocks/service-mock.js';
import Recipe from './models/Recipe.js';
import { Fraction } from 'fractional'; 

let searchButton = document.querySelector('.search__btn');
let searchInput = document.querySelector('.search__field');
let resultsList = document.querySelector('.results__list');
let recipe = document.querySelector('.recipe');
let shoppingList = document.querySelector('.shopping__list');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let query = searchInput.value;

    Service.getRecipes(query).then(response => {
        let recipes = response.recipes;
        recipes.forEach(recipe => {
            let elementLi = document.createElement('li');
            elementLi.innerHTML = `
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="img/test-1.jpg" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
            `;

            resultsList.append(elementLi);
        });
        console.log(recipes);
    });
    
})

window.addEventListener('hashchange', () => {
    let id = window.location.hash.replace('#', '');    
    marcarSeleccionado(id);   
    Service.getRecipe(id).then(response => {
        renderReceta(response);
    });
    
    
})

function marcarSeleccionado(id) {
    let listResults = Array.from(resultsList.children);
    listResults.forEach(e => {
        e.firstElementChild.classList.remove('results__link--active');
    });
    resultsList.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
}

function renderReceta(receta) {
    let r = new Recipe(receta.recipe);
    let markup = `
    <figure class="recipe__fig">
                <img src="img/test-1.jpg" alt="Tomato" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${r.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">45</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">4</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny btn-minus">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny btn-plus">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
   
                </ul>

                <button class="btn-small recipe__btn shopping-list-button">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${r.publisher}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${r.source_url}" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
    `
    recipe.innerHTML = markup;    
    renderIngredientes(r.ingredients);
    let btnMinus = recipe.querySelector('.btn-minus');
    let btnPlus = recipe.querySelector('.btn-plus');
    let shoppingListBtn = recipe.querySelector('.shopping-list-button');
    btnMinus.addEventListener('click', () => changeServings('dec', r.ingredients));
    btnPlus.addEventListener('click', () => changeServings('inc', r.ingredients));
    shoppingListBtn.addEventListener('click', () => {
        renderShoppingList(r.ingredients);
    });
}

function renderIngredientes(ingredients) {    
    let ingredientsList = document.querySelector('.recipe__ingredient-list');
    ingredients.forEach(e => {
    let cantFractional = getCantFractional(e.cant); 
    let ingredient = document.createElement('li');
    ingredient.className="recipe__item";
    ingredient.innerHTML=`
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">${cantFractional}</div>
        <div class="recipe__ingredient">
            <span class="recipe__unit">${e.unit}</span>
            ${e.name}
        </div>
    `;

    ingredientsList.append(ingredient);
    })
}

function changeServings(tipo, ingredients) {
    let servings = document.querySelector('.recipe__info-data--people');    
    let cantServings = Number.parseInt(servings.textContent);
    let newCantServings = tipo === 'inc' ? cantServings + 1 : cantServings - 1;
    servings.textContent = newCantServings;

    ingredients.forEach(i => {
        i.cant = i.cant * newCantServings / cantServings;
    });
    let ingredientsList = document.querySelector('.recipe__ingredient-list');
    ingredientsList.innerHTML = '';
    renderIngredientes(ingredients);
}

function getCantFractional(cant) {
    let [entero, decimal] = cant.toString().split('.');

    if (entero == 0) {  
        let f = new Fraction(cant);
        return `${f.numerator}/${f.denominator}`;        
    } else {
        if (decimal) {
            let d = cant - entero;
            let f = new Fraction(d);
            return `${entero} ${f.numerator}/${f.denominator}`
        } else {
            return `${entero}`
        }        
    }
}

function renderShoppingList(ingredients) {
    ingredients.forEach(e => {
        let element = document.createElement('li');
        element.className = 'shopping__item';
        element.innerHTML = `
            <div class="shopping__count">
            <input type="number" value="${e.cant}" step="100">
            <p>${e.unit}</p>
            </div>
            <p class="shopping__description">${e.name}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        `;
        shoppingList.append(element);
    });

    shoppingList.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.shopping__delete')){
            let ingredientElement = target.closest('.shopping__item');
            ingredientElement.remove();
        }
    });
}
