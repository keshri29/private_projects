# Travel Log App

This repository contains the source code and documentation for a Travel Log app built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to log and share their travel experiences and discover new locations. It provides features for user authentication, profile management, creating and editing travel logs, browsing locations, searching for content, and more.

## Features

- User Authentication and Authorization:
  - Sign up to register a new user account.
  - Log in to authenticate and access the app's features.
  - Log out from the currently authenticated user account.

- User Profile:
  - View user profile information, including username and travel logs.
  - Edit user profile information to update personal details.

- Travel Logs:
  - Browse a list of all travel logs.
  - Create a new travel log to share a travel experience.
  - View specific travel logs with their details and associated photos.
  - Edit existing travel logs to make updates or add new content.

- Locations:
  - Explore a list of all locations or destinations.
  - Create new locations to add to the app's database.
  - View specific locations with their details and related travel logs.

- Search:
  - Perform searches for travel logs, locations, or specific content.

- Dashboard:
  - Access a personalized dashboard with relevant information, such as favorite travel logs and recommended locations.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/TheDayDreamer01/TravelLog-MERN.git
   ```

2. Navigate to the project directory:

   ```shell
   cd travellog-api
   ```

3. Install the dependencies for the server and client:

   ```shell
   <!-- Install dependencies for the backend -->
   npm install

   <!-- Install dependencies for the frontend -->
   cd frontend
   npm install
   ```

4. Configure Environment Variables:
   - Create a `.env` file in the `server` directory.
   - Set the required environment variables such as database connection details and secret keys. Refer to the `.env.example` file for the required variables.

5. Start the server and client concurrently:

   ```shell
   npm run dev
   ```

   This will start the server and client development servers concurrently.

6. Open your web browser and visit `http://localhost:3000` to access the Travel Log app.

## API Routes

The following API routes are available in the server:

### User Authentication and Authorization Routes

- `POST /api/signup`: Route to register a new user.
- `POST /api/login`: Route to authenticate and log in a user.
- `POST /api/logout`: Route to log out the currently authenticated user.

### User Profile Routes

- `GET /api/profile/:username`: Route to retrieve a user's profile information and travel logs.
- `PUT /api/profile/:username`: Route to update a user's profile information.

### Travel Log Routes

- `GET /api/logs`: Route to retrieve a list of all travel logs.
- `POST /api/logs`: Route to create a new travel log.
- `GET /api/logs/:logId`: Route to retrieve a specific travel log with its details and photos.
- `PUT /api/logs/:logId`: Route to update a specific travel log.
- `DELETE /api/logs/:logId`: Route to delete a specific travel log.

### Location Routes

- `GET /api/locations`: Route to retrieve a list of all locations or destinations.
- `POST /api/locations`: Route to create a new location.
- `GET /api/locations/:locationId`: Route to retrieve a specific location with its details and associated travel logs.

### Search Routes

- `GET /api/search`: Route to perform searches for travel logs, locations, or specific content.

## Technologies Used

- MongoDB: NoSQL database for storing user and travel log data.
- Express: Node.js framework for building the server-side API.
- React: Frontend library for building the user interface.
- Node.js: JavaScript runtime environment for server-side development.
- Redux: State management library for managing application state.
- Axios: HTTP client for making API requests.
- Other dependencies: Refer to the `package.json` files in the `server` and `client` directories for a full list of dependencies used.

## Contributing

Contributions to the Travel Log app are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.

Before contributing, please review the [Contribution Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).