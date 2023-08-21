# INPUT
Users can use mouse input to select either the Add City or Cities List page. On the Add City page, users can input text for a City Name, City Country, and City Population. On the Cities List page, users can click links of city names to see more details about the city. 

# PROCESS
Navigation is completed using the navbar and routes. The Add City page utilizes a form where data about a city is collected. On submission with the button, the information in the form is set into a new city, added to the citiesData array, and the id value is advanced so each city has a unique id, and the app automatically navigates to the Cities List page. On clicking on a city link, useParameters determines the id of the chosen city, and then the city is selected from the array using find based on the id. The properties of the city are then rendered in the nested route.

# OUTPUT
The default page of the application is the Cities List page. Each city in the array is rendered as a hyperlinked unordered list item. The details are nested on the same page when the list item is selected. The Add City page consists of a form with three inputs and an Add City button. 