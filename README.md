**Fast React Pizza Co.**
A simple React application that displays a pizza menu with an option to order. The app includes a dynamic menu with pizza items, each having information like name, ingredients, price, and availability status. It also includes a footer with business hours and a call-to-action button to order when the store is open.

**Features**
Menu Listing: Displays a list of pizzas with details like ingredients, price, and availability status.
Conditional Rendering: Shows "Sold out" for unavailable pizzas and the price for available ones.
Footer with Business Hours: Displays the store's operating hours and shows a button to place an order when the store is open.
Responsive UI: The app is designed with a basic responsive layout in mind.

**Installation**
Clone the repository to your local machine:
git clone https://github.com/PrathamTandon1507/Basic-React-Projects.git

Navigate to the project directory:
cd Basic-React-Projects

Install dependencies:
npm install

Run the development server:
npm start
Your app will be running at http://localhost:3000.

**Technologies Used**
React: JavaScript library for building user interfaces.
ReactDOM: To render React components to the DOM.
CSS: For basic styling of the app.

**Project Structure**
/src
  /index.css       # Styles for the app
  /index.js        # Main entry point for the React app
  /components      # React components (Header, Menu, Pizza, Footer)
index.js: This is where the app is rendered. It sets up the root element for React to take control of.
index.css: Contains the global styles for the application.
components/: Contains the different components such as Header, Menu, Pizza, Footer.

**Components**
App
The root component that holds the Header, Menu, and Footer components.
Header
Displays the name of the pizza restaurant.
Menu
Contains the pizza menu and iterates over the pizzaData array to render each pizza.
Pizza
Displays each pizza with its image, name, ingredients, price, and availability.
Footer
Displays the store's operating hours and a button to place an order if the store is open.
Order
Displays a message with the operating hours and an order button when the store is open.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Added new feature').
Push to the branch (git push origin feature-branch).
Create a pull request.
