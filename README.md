
```txt
📌 AI Code Review System with Gemini API Integration & User Authentication

📝 Overview:

The **AI Code Review System** is an intelligent platform that analyzes, reviews, and suggests improvements for source code using Google’s Gemini AI API. It combines the power of AI with secure user authentication and smart caching to deliver fast, reliable, and cost-effective code reviews.

Built with a **React.js (Vite)** frontend and a **Node.js + Express** backend, this system ensures a smooth developer experience. All **AI-generated** responses are stored in a database so that if the same code is submitted again, results are fetched instantly without re-calling Gemini — saving time, cost, and API usage.

🚀 Key Features
🔍 AI-Powered Code Review
 🔹Integrates with **Gemini** AI API for detailed, context-aware code reviews.
 🔹Identifies bugs, optimization opportunities, and best practice violations.
 🔹Works with multiple programming languages (easily extendable).

🔐 Secure User Authentication
 🔹**JWT-based** authentication for secure API access.

🚀Role-based structure:

 🔹 Registered Users → Submit code for review & view their personal history.
 🔹 Admin → Access analytics & manage system usage.
 🔹 Passwords securely hashed before storage.

⚡ Smart Response Caching
 🔹 Avoids duplicate AI calls by checking if code was reviewed before.
 🔹 Retrieves stored AI reviews from the database in milliseconds.
 🔹 Reduces API cost and boosts response speed.

🖥️ Modern Frontend (React + Vite)
 🔹Built with React.js and Vite for lightning-fast development.
 🔹Responsive, clean UI for code submission and review results.
 🔹Syntax highlighting for better readability of both code and AI feedback.

🛠 Robust Backend (Node.js + Express)
 🔹API endpoints for code submission, review retrieval, and authentication.
 🔹Handles communication with Gemini AI API and the database.
 🔹Includes input validation and security middleware.

💾 Persistent Storage

   🔹Database stores:
      🔹Code submitted by users.
      🔹AI-generated review results.
      🔹User accounts & authentication data.
      🔹Indexed queries for quick retrieval.
    
   🔹Indexed queries for quick retrieval.

🏗️ Tech Stack
  ✨Frontend:
     ⚛️ React.js (Vite)
     🎨 Tailwind CSS / CSS Modules
     📦 Axios for API communication
     🖍 Prism.js / Highlight.js for syntax highlighting

  ✨Backend:
   🟢 Node.js + Express.js
   🌐 Gemini AI API (Google GenAI)
   🔐 JWT for authentication
   🛡 bcrypt for password hashing
   📦 dotenv for environment configuration

 📌Database:
   🗄 MongoDB for storage of:
     🔹Code reviews
     🔹User authentication data
     🔹Review history


🔄 Workflow

  1:User Signs In / Registers → Authenticated with JWT.
  2:Code Submission → User pastes code in the editor and submits.
  3:Backend Checks Database → Searches for a previous review of the exact code.
  4:If found, sends cached review instantly.
  5:If not found, calls Gemini AI API.
  6:Gemini AI Analysis → AI reviews code and returns structured feedback.
  7:Store in Database → Saves both the code and review for future use.
  8:User Views Result → Review displayed with syntax highlighting in frontend.

## 🖼 System Architecture (ASCII Diagram)

   +--------+        +-------------------+        +------------------+
   |  User  |  ----->| React Frontend    | -----> | Node.js Backend   |
   +--------+        +-------------------+        +---------+--------+
                                                        |
                                                        v
                                                  +-------+--------+
                                                  | Gemini AI API  |
                                                  +-------+--------+
                                                        ^
                                                        |
                                                 +-------+--------+
                                                 |   Database     |
                                                 +----------------+

🔑 Demo Login Credentials

🔹 Use this account to explore the system:
     Email:    testuser1@gmail.com
     Password: test@1234

### 📂 Project Folder Structure
1:AI-CODE-REVIEW-STUDIO/
│
├── backend/                     # Backend (Node.js + Express + Gemini API Integration)
│   ├── node_modules/            # Backend dependencies
│   ├── src/                     # Backend source files
│   ├── .env                     # Environment variables (API keys, DB config)
│   ├── .gitignore               # Git ignored files for backend
│   ├── package-lock.json        # Dependency lock file
│   ├── package.json             # Backend dependencies & scripts
│   └── server.js                # Main backend entry point
│
├── frontend/                    # Frontend (React + Vite)
│   ├── node_modules/            # Frontend dependencies
│   ├── public/                  # Static files (favicon, assets, etc.)
│   ├── src/                     # React source code (components, pages, etc.)
│   ├── .env                     # Environment variables (frontend config)
│   ├── .gitignore               # Git ignored files for frontend
│   ├── eslint.config.js         # ESLint configuration
│   ├── index.html               # Main HTML file for React
│   ├── package-lock.json        # Dependency lock file
│   ├── package.json             # Frontend dependencies & scripts
│   ├── vite.config.js           # Vite build configuration
│   └── README.md                # Frontend-specific documentation
│
├── README.md                    # Main project documentation (this file)

▶️ How to Run the Project
  
   🔧 Prerequisites
     🔹Node.js installed (>= v16)
     🔹MongoDB running locally or on Atlas
     🔹Gemini API Key

  ⚡ Steps
    
     1: Clone the repository
     🔹git clone https://github.com/ansuljain789/AI-CODE-Review-project.git
     🔹cd github-auto-push-chatbot

     2:Install dependencies
     🔹cd backend && npm install  
     🔹cd ../frontend && npm install

     3:Setup environment variables
        🔹Create a .env file in the backend folder with:

           GOOGLE_API_KEY= yourgeminiapikey
           PORT=PORTNUMBER
           MONGO_URI= yourmongodb url
           JWT_SECRET=12345
           FRONTEND_URL=YOURFRONTENDURL
        🔹Create a .env file in the backend folder with:
           VITE_REACT_API_ENDPOINT= YOURBACKENDURL

           
     4: Run the backend 
         nodemon server.js OR node server.js
     5: Run the frontend
         npm run dev 

👤 Author
   Ansul Jain
   GitHub: https://github.com/ansuljain789
   Email: ansuljain789@gmail.com

🌟 Benefits
   ✅ Secure & personalized (user-specific reviews)
   ✅ Saves costs (reuses cached reviews)
   ✅ Lightning-fast (Vite + optimized DB queries)
   ✅ Scalable (easily extendable for more AI models)

📚 Future Enhancements

   📌 Batch code review (multiple files at once)
   📌 Export reviews to PDF/Markdown
   📌 Real-time collaboration between users
   📌 Customizable AI strictness levels

🤝 Contributions
   🔹Fork the repo
   🔹Create a feature branch: git checkout -b feat/your-feature
   🔹Commit: git commit -m "feat: add your feature"
   🔹Push & open a PR 

📜 License
   🔹This project is licensed under the MIT License.
