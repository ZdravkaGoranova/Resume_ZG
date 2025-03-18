# 🚀 Resume_ZG

## 📌 Project Description
Resume_ZG is a web application for managing and visualizing resumes. The project is built using React for the client-side and Express.js for the server-side, with MongoDB as the database.
##### The project is deployed online at [https://portfoliozg.onrender.com/](https://portfoliozg.onrender.com/)

## 🛠️ Technologies
The project uses the following technologies:
- **Client:** React, Vite, Material UI, React Router, Flickity
- **Server:** Express.js, MongoDB, dotenv, CORS
- **Development Tools:** ESLint, Vite, Nodemon

## 📂 Project Structure
```
Resume_ZG/
│── client/               # Client-side (React)
│   ├── src/              # Client source code
│   ├── public/           # Public assets
│   ├── package.json      # Client configuration
│   └── vite.config.js    # Vite configuration
│
│── server/               # Server-side (Node.js + Express)
│   ├── server.js         # Main server file
│   ├── .env              # Environment configuration
│   ├── package.json      # Server configuration             
│
│── README.md             # Project documentation
│── package.json          # Main package.json
│── .gitignore            # Git ignored files
```

## ⚙️ Installation and Setup
### 1. Clone the repository
```sh
git clone https://github.com/ZdravkaGoranova/Resume_ZG.git
cd Resume_ZG
```

### 2. Install dependencies
```sh
npm install
cd client && npm install
cd ../server && npm install
```

### 3. Configure Environment Variables
Create a `.env` file inside the `server` folder and set the required variables, for example:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the Application
#### 🚧 Development Mode
```sh
npm run dev
```
This will start both the client and server concurrently.

#### 🔧 Start Separately
If you want to run the client and server separately:
```sh
npm run dev  # Starts the client-side
The application should now be running on `http://localhost:5173`.
```
```sh
npm run server  # Starts the server-side
`🚀 Сървърът стартира на http://localhost:5000`

 Pinged your deployment. You successfully connected to MongoDB!
   !!! [{Data}]
```

