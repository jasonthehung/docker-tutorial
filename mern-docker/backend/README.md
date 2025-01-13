# Express MySQL Prisma App

This project is an Express.js backend server that connects to a MySQL database using Prisma ORM. It is set up to run over HTTPS.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-mysql-prisma-app.git
   ```

2. Navigate to the project directory:
   ```
   cd express-mysql-prisma-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add your database connection string:
   ```
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

2. Update the `prisma/schema.prisma` file to match your database schema.

## Running the Application

To run the application, use the following command:
```
npm start
```

The server will start on `https://localhost:3000`.

## API Endpoints

- `GET /items` - Retrieve all items
- `POST /items` - Create a new item

## License

This project is licensed under the MIT License.