import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecipeList from "./components/recipeList";
import Edit from "./components/editUpdateDelete.js";
import Create from "./components/createRecipe";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecipeList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;