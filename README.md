# Nursery Nest Server

The backend of Nursery Nest is built with Node.js, Express, and MongoDB to provide RESTful APIs for the Nursery Nest application.
## Table of Contents

- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Project Locally](#running-the-project-locally)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Dotenv**: A zero-dependency module that loads environment variables from a `.env` file.
- **Cors**: A middleware to enable Cross-Origin Resource Sharing.

## Prerequisites

To run this project locally, you will need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A MongoDB instance (local or cloud-based)

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Bulbul-Programing/Nursery-Nest-Server.git
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Or using Yarn:
    ```bash
    yarn install
    ```

## Running the Project Locally

To run the project on your local machine, follow these steps:


1. **Start the development server:**

    Using npm:
    ```bash
    npm run start:dev
    ```

    Or using Yarn:
    ```bash
    yarn start:dev
    ```

    This will start the server using `ts-node-dev` for automatic restarting on code changes. The server will run at `http://localhost:5000` by default.


Happy Coding! 🌱
