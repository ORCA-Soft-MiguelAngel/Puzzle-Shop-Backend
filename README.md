# Puzzle-Shop [Backend]

Puzzle Shop is a web-based e-commerce application built using React. The application enables users to explore a collection of products, add them to their shopping cart, make purchases, and have control over their account settings.

# Technologies Used

- React: JavaScript library for building user interfaces.
- Context: for application state management.
- React Router: for application routing.
- Tailwind / Headless ui: CSS framework for responsive styles and components.
- Node.js: JavaScript runtime environment on the server side.
- Express: Node.js framework for building web applications and APIs.
- MongoDB: NoSQL database for data storage.
- Axios: Promise-based HTTP client for making API requests.

# To install and run

1. Clone or download the repo and install the dependencies.
```
   npm install
```
2. Create a .env file in the root folder and configure the following environment variables:

```
PORT=5000
NODE_ENV=development
CLIENT_WHITELIST=http://localhost:3000
MONGO_URL=mongodb://localhost:27017/puzzle_db
JWT_SECRET_KEY=puzzle-scret-key
```

3. Run npm run dev to start the project
```
   npm run dev
```
# Note

- This is the Backend part of this project, you need to run this before the frontend, you can check the Frontend project [HERE]()
- When both (Backend and Frontend) Starts, Signup with a new account, you only need to put an username and password, for example:
```
username: miguel  
password: pass123
```
- You need a MongoDB local server or a cloud link to fill the MONGO_URL variable
