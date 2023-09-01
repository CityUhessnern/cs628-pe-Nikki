import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipe = (props) => (
    <tr>
        <td>{props.recipe.recipeName}</td>
        <td>{props.recipe.ingredients}</td>
        <td>{props.recipe.instructions}</td>
        <td>{props.recipe.notes}</td>
        <td>
            <Link className="btn btn-Link" to={`/edit/${props.recipe._id}`}>Edit</Link>
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecipe(props.recipe._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
);

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    // This method fetches the recipes from the database.
    useEffect(() => {
        async function getRecipes() {
            const response = await fetch(`https://legendary-barnacle-pvgqrwg94w27rr4-5050.app.github.dev/recipe`);

            if(!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const recipes = await response.json();
            setRecipes(recipes);
        }

        getRecipes();

        return;
    }, [recipes.length]);

    // This method will delete a recipe
    async function deleteRecipe(id) {
        await fetch(`https://legendary-barnacle-pvgqrwg94w27rr4-5050.app.github.dev/recipe/${id}`, {
            method: "DELETE" 
        });

        const newRecipes = recipes.filter((recipe) => recipe._id !== id);
        setRecipes(newRecipes);
    }

    // This method will map out the recipes on the table
    function recipeList() {
        return recipes.map((recipe) => {
            return (
                <Recipe 
                    recipe={recipe}
                    deleteRecipe={() => deleteRecipe(recipe._id)}
                    key={recipe._id}
                />
            );
        });
    }

    // This following section will display the table with the records of individuals.
    return (
        <div>
            <h3>Recipe List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Recipe</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Notes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{recipeList()}</tbody>
            </table>
        </div>
    );
}