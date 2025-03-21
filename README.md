# Open Job Posting Application
![image](https://github.com/user-attachments/assets/c0083723-60c1-451a-8b20-fc3d2c2433ca)
[demo](https://mern-stack-ten-woad.vercel.app/)
## Overview
Open Job Posting is a **MERN Stack** (MongoDB, Express.js, React, Node.js) application that allows users to **post** and **view job listings** easily. This app is designed to be lightweight and scalable, with a focus on performance and usability.

## Features
- **Add Jobs**: Employers can post job listings with details like title, description, salary, and location.
- **Show Jobs**: Users can browse available job listings.
- **CORS Policy Configured**: Ensures smooth communication between frontend and backend.
- **Axios Client**: For handling API requests efficiently.
- **Deployment**:
  - **Frontend**: Deployed on **Vercel**.
  - **Backend**: Deployed on **Render**.
- **MongoDB Database**: Stores job listings and user data.

## Tech Stack
- **Frontend**: React.js (Vite, Axios, React Router)
- **Backend**: Node.js, Express.js, MongoDB (Mongoose ORM)
- **Database**: MongoDB (Atlas)
- **Deployment**:
  - Vercel (Frontend)
  - Render (Backend)

## Installation & Setup
### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas (or local MongoDB instance)
- Vercel & Render accounts for deployment

### Clone Repository
```bash
git clone https://github.com/Krishna-sm/Mern-Stack.git
cd Mern-Stack
```

### Backend Setup
```bash
cd backend
npm install
```

#### Environment Variables
Create a `.env` file in the `backend` directory and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

Run the backend:
```bash
npm start
```

### Frontend Setup
```bash
cd ../frontend
npm install
```

Run the frontend:
```bash
npm run dev
```

### Deployment
#### Frontend (Vercel)
```bash
vercel
```
#### Backend (Render)
1. Push your backend code to GitHub.
2. Connect it to Render and deploy.

## API Endpoints
### Job Routes
- **`GET /api/v1/jobs`** → Fetch all job listings
- **`POST /api/v1/create`** → Add a new job

## Contributing
Feel free to fork this repository and contribute to improving the project!

## License
This project is licensed under the MIT License.

