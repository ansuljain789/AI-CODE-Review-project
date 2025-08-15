📌 AI Code Review System with Gemini API Integration & User Authentication
📝 Overview:


The AI Code Review System is an intelligent platform that analyzes, reviews, and suggests improvements for source code using Google’s Gemini AI API. It combines the power of AI with secure user authentication and smart caching to deliver fast, reliable, and cost-effective code reviews.

Built with a React.js (Vite) frontend and a Node.js + Express backend, this system ensures a smooth developer experience. All AI-generated responses are stored in a database so that if the same code is submitted again, results are fetched instantly without re-calling Gemini — saving time, cost, and API usage.

🚀 Key Features
🔍 AI-Powered Code Review
 =>Integrates with Gemini AI API for detailed, context-aware code reviews.
 =>Identifies bugs, optimization opportunities, and best practice violations.
 =>Works with multiple programming languages (easily extendable).

🔐 Secure User Authentication
=> 1.JWT-based authentication for secure API access.

🚀Role-based structure:

Registered Users → Submit code for review & view their personal history.

Admin → Access analytics & manage system usage.

Passwords securely hashed before storage.

⚡ Smart Response Caching

Avoids duplicate AI calls by checking if code was reviewed before.

Retrieves stored AI reviews from the database in milliseconds.

Reduces API cost and boosts response speed.

🖥️ Modern Frontend (React + Vite)

Built with React.js and Vite for lightning-fast development.

Responsive, clean UI for code submission and review results.

Syntax highlighting for better readability of both code and AI feedback.

🛠 Robust Backend (Node.js + Express)

API endpoints for code submission, review retrieval, and authentication.

Handles communication with Gemini AI API and the database.

Includes input validation and security middleware.

💾 Persistent Storage

Database stores:

Code submitted by users.

AI-generated review results.

User accounts & authentication data.

Indexed queries for quick retrieval.