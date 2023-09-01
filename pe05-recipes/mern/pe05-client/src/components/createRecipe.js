import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        recipeName: "",
        ingredients: "",
        instructions: "",
        notes: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newRecipe = { ...form };

        await fetch("https://legendary-barnacle-pvgqrwg94w27rr4-5050.app.github.dev/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ recipeName: "", ingredients: "", instructions: "", notes: ""});
        navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Create New Recipe</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="recipeName">Recipe</label>
                    <input
                        type="text"
                        className="form-control"
                        id="recipeName"
                        value={form.recipeName}
                        onChange={(e) => updateForm({ recipeName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ingredients"
                        value={form.ingredients}
                        onChange={(e) => updateForm({ ingredients: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <input
                        type="text"
                        className="form-control"
                        id="instructions"
                        value={form.instructions}
                        onChange={(e) => updateForm({ instructions: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input
                        type="text"
                        className="form-control"
                        id="notes"
                        value={form.notes}
                        onChange={(e) => updateForm({ notes: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create recipe"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}