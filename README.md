# messagingApp
## Project Overview
Our app is a real-time messaging platform that enables users to communicate instantly through text messages, voice, and video calls. The app provides a seamless communication experience with features designed for individual and group conversations, making it ideal for personal use, teams, and communities.

## Key Features
* Real-time Messaging: Instant messaging with support for one-on-one and group chats, ensuring that messages are delivered and received in real time using Socket.io.
* Voice and Video Calls: High-quality voice and video calls with support for both individual and group calls.
* File Sharing: Users can send images, documents, and media files directly in conversations.
* Notifications: Real-time notifications for incoming messages, missed calls, and other user activities.
* User Authentication: Secure user registration and login using JWT-based authentication to ensure privacy and security.
* Customizable User Profiles: Users can create and manage personal profiles, including profile pictures, statuses, and user settings.
* Presence Indicators: Online/offline status indicators allow users to see who is currently active.
* Message History: Chat history is saved, allowing users to access previous conversations even after logging out.
* Group Management: Create, join, and manage chat groups with custom roles for administrators and members.
* Cross-Platform Support: The app is optimized for both web and mobile use, providing a seamless experience across devices.

## Technologies Used
* Frontend: React with Vite for fast development.
* Backend: Express.js as a server framework.
* Database: MongoDB.

## Installation Guide
**Clone the Repository**
```
git clone https://github.com/yourusername/messagingApp.git
cd messagingApp
```
**Backend Setup**
* Navigate to the /server folder:
```
cd backend
```
* Install dependencies:
```
npm install

```
* Set up environment variables by creating a `.env` file with the following:
```
PORT=5000
MONGO_URI=<your-mongo-db-uri>
JWT_SECRET=<your-secret-key>

```
* Run the backend server:
```
npm start

```
**Frontend Setup**
* Navigate to the `/client` folder::
```
cd frontend

```
* Install dependencies:
```
npm install

```
* Set up environment variables by creating a `.env` file in `/client`:
```
VITE_API_URL=http://localhost:5000

```
* Run the backend server:
```
npm run dev

```
**Database Setup**
Ensure that MongoDB is installed and running. If you are using MongoDB Atlas, ensure your connection string is correct in the `.env` file.

## Prerequisites
Before setting up the project, ensure you have the following installed:

* Node.js (v16 or higher)
* MongoDB
* Git

## API Documentation

### User
* POST `/api/user/register`
Registers a new user.
* POST `/api/user/login`
Logs in a user and returns a JWT token.

  
### Chat
* GET `/api/chat`
  Create or fetch One to One Chat
* POST `/api/chat`
  Fetch all chats for a user
* POST`/api/chat/group`
  Create New Group Chat
* PUT `/api/chat/rename`
  Rename Group
* PUT `/api/chat/groupremove`
  Remove user from Group
* PUT `/api/chat/groupadd`
  Add user to Group / Leave
  
### Message
* POST `/api/message`
  Create New Message
* GET `/api/message/:chatId`
  Get all Messages

