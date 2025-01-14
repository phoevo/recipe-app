import React from "react"
import Recipe from "./components/Recipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromAI } from "./ai"
export default function Main(){

    const [ingredients, setIngredient] = React.useState([])

    const [recipe, setRecipe] = React.useState(false)

    async function getRecipe(){
        const generatedRecipeMarkdown = await getRecipeFromAI(ingredients)
        setRecipe(generatedRecipeMarkdown);
    }

    const ingredientTitle = ingredients.length < 1 ? "Add ingredients" : "Ingredients"

    const ingredientTitleStyle = {
        color: ingredientTitle === "Add ingredients" ? "grey" : "black",
        fontSize: ingredientTitle === "Add ingredients" ? "15px" : "25px"
    }

    const getRecipeStyle = {
        backgroundColor: ingredients.length >= 4 ? "black" : "grey"
    }


    function submitBtn(formData){
        let newIngredient = formData.get("ingredient");
        newIngredient = newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1).toLowerCase();
        if(ingredients.includes(newIngredient)){
            console.log("already exists");
        }else{
            setIngredient(prevIngredients => [...prevIngredients, newIngredient])
        }

    }

    const ingredientsNeeded = 4;

    const ingredientCounter = ingredientsNeeded - ingredients.length <= 0 ?
     "Generate recipe" :
     `You need ${ingredientsNeeded - ingredients.length} more ingredients to generate a recipe`;


    function removeItem(ingredientToRemove){
        setIngredient((prevIngredients) =>
            prevIngredients.filter((ingredient) => ingredient !== ingredientToRemove)
          );
        }




    return(
        <main>
            <form action={submitBtn} className="ingredientForm">
                <input
                    type="text"
                    placeholder="e.g cheese"
                    name="ingredient"
                />

                <button>Add ingredient</button>
            </form>

            <IngredientsList
            ingredientTitleStyle = {ingredientTitleStyle}
            ingredientTitle = {ingredientTitle}
            removeItem = {removeItem}
            ingredients = {ingredients}/>

            {ingredients.length >= 1 && <section className="popUpBox">
                <h4>{ingredientCounter}</h4>

                <button
                onClick={getRecipe}
                style={getRecipeStyle}
                disabled={ingredients.length < 4}
                >Get a recipe
                </button>

            </section>}

            {recipe && <Recipe recipe = {recipe} />}

        </main>
    )
}