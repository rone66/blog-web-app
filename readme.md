# MERN-Based Blog Web Application Readme

This readme provides a comprehensive guide to set up and use a MERN-based (MongoDB, Express.js, React, Node.js) blog web application. This application allows users to create, read, update, and delete blog posts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Using the Blog Web App](#using-the-blog-web-app)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)


## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- Node.js and npm (Node Package Manager)
- MongoDB (You can install it locally or use a cloud-based service like MongoDB Atlas)
- Git (optional, but recommended for version control)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/mern-blog-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-blog-app
   ```

3. Install the server dependencies:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install the client dependencies:

   ```bash
   npm install
   ```

6. Return to the project root:

   ```bash
   cd ..
   ```

7. Create a `.env` file in the project root and configure the following environment variables:

   ```env
   PORT=3001 # Server port (you can choose any port)
   MONGODB_URI=your-mongodb-connection-string # MongoDB connection string
   ```

8. You can generate a secure secret key for JWT authentication and add it to the `.env` file:

   ```env
   JWT_SECRET=your-secret-key
   ```

## Usage

### Running the Application

1. Start the server:

   ```bash
   cd server
   npm start
   ```

   This will start the Express.js server on the specified port (default is 3001).

2. Start the client (in a separate terminal tab):

   ```bash
   cd client
   npm start
   ```

   This will start the React development server and open the web application in your default web browser.

### Using the Blog Web App

- Open your web browser and navigate to `http://localhost:3000` (or the port you specified).

- You can register a new account or log in if you already have an account.

- Once logged in, you can perform the following actions:
  - Create new blog posts
  - Crerate new blog posts by select category
  - View a list of all blog posts
  - view a list of all blog posts by category
  - View individual blog posts by category
  - Edit and delete your own blog posts
  - Create and delete comment
  - Log out

## Folder Structure

```
mern-blog-app/
├── client/                 # React client application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # Axios settings
│   │   ├── context/      # conetext
|   |   ├── constants/     # All API urls and blog category lists
|   |   ├── index.js       # Main React application
│   │   └── ...
├── server/                 # Express.js server application
│   ├── controller/       # Controllers for handling routes
│   ├── model/            # Mongoose models
│   ├── routes/            # Express.js routes
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration files
│   ├── index.js             # Express.js app setup
│   └── ...
├── .env                    # Environment variable configuration
├── package.json            # Node.js package file
├── README.md               # This readme file
└── ...
```

## Technologies Used

- **MongoDB**: A NoSQL database used for storing blog posts and user data.
- **Express.js**: A Node.js web application framework used for building the server-side API.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime used for running the server-side code.
- **Mongoose**: An ODM (Object-Document Mapping) library for MongoDB.
- **jwtWebToken**: For authentication and JWT (JSON Web Tokens) support.
- **material UI**: For styling the frontend components.
- **Axios**: For making HTTP requests from the React client to the Express server.



