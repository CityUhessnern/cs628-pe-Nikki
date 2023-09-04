# Input
This application recieves input on button clicks for a Create Recipe page, route for editing existing recipes, and route for deleting an existing recipe. The Create and Edit recipe pages receive text input in Recipe Name, Ingredients, Instructions, and Notes fields.

# Process
The backend is a MongoDB server and utilizes standard CRUD (Create, Read, Update, Delete) operations. The backend stores data input in the front end through the Create, Edit, and Delete forms and buttons. When data is updated in the form and submitted, it is then stored in the backend and routes allow it to be read from the front end.

# Output
The output is a very basic table of recipe names, ingredients, instructions, and notes, with one additional column for performing edit and delete actions.