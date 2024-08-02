# Training and Placement Portal - Server

This repository contains the server-side code for the Training and Placement Portal, a web application built to streamline the job application process for students and provide various features for the Training and Placement Department.

## Features

- **Node, Express**: Utilized for building the backend API.
- **MongoDB**: Used as the database to store application data.
- **JWT**: Implemented for secure authentication.
- **NodeMailer**: Used for sending real-time email notifications for new job postings.
- **Admin Functionality**: Admin can download Excel sheets for students applied for specific companies.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/training-placement-server.git
    ```
2. Install dependencies:
    ```bash
    cd training-placement-server
    npm install
    ```
3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```env
        MONGODB_URI=your_mongodb_uri
        JWT_SECRET=your_jwt_secret
        EMAIL_SERVICE=your_email_service
        EMAIL_USER=your_email_user
        EMAIL_PASS=your_email_pass
        ```
4. Start the server:
    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
