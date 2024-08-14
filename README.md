# React + TypeScript + Vite

---

# Carefinder

Carefinder is a web application designed to help users find, export, and share information about hospitals within Nigeria. The platform is built using ReactJS and TypeScript, with Firebase handling the backend functionalities, including user authentication and data storage. Carefinder aims to provide a seamless experience for users to locate healthcare facilities and share relevant details with others.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Hospital Search**: Users can search for hospitals by name, location, and other criteria.
- **Export to CSV**: Search results can be exported to a CSV file for easy sharing and offline use.
- **Share via Email or Link**: Users can share hospital information via email or by generating a shareable link.
- **User Authentication**: The app supports user registration, login, and profile management using Firebase Authentication.
- **Admin Content Creation**: Admins can create content using Markdown, which is displayed dynamically on the platform.
- **Responsive Design**: The application is fully responsive and works across different devices and screen sizes.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli) (optional, for deploying the application)

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/carefinder.git
    cd carefinder
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add a web app to your Firebase project and copy the Firebase configuration.
    - Create a `.env` file in the root directory of the project and add your Firebase configuration as follows:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

4. **Run the Application**:
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

## Usage

1. **Search for Hospitals**: Use the search bar on the homepage to find hospitals by name or location.
2. **View Hospital Details**: Click on a hospital from the search results to view detailed information.
3. **Export Results**: After searching, click the "Export to CSV" button to download the search results.
4. **Share Information**: Use the share options to send hospital details via email or generate a link to share.
5. **User Authentication**: Register or log in to access personalized features like saving favorite hospitals.
6. **Admin Features**: Admin users can log in to access content creation tools with Markdown support.

## Components

- **Nav**: Navigation bar that includes links to different pages and user authentication options.
- **HospitalCard**: Displays summarized information about a hospital in the search results.
- **Pagination**: Controls the pagination of search results to navigate through multiple pages.

## Testing

The project includes testing for various components:

- **Nav Component**: Ensures that the navigation links and user authentication states are handled correctly.
- **HospitalCard Component**: Verifies that hospital details are displayed correctly.
- **Pagination Component**: Tests the functionality of pagination controls.

To run tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---