# Real-Time Kanban Board with Integrated Chat for Group Project Management

This web application is designed for group project management, featuring a Kanban board with real-time chat capabilities. It enables teams to manage tasks and communicate efficiently using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with WebSockets for real-time communication.

## Features

### 1. Kanban Board for Project Management:
- **Project-Specific Columns**: Columns represent different stages of the project (e.g., To Do, In Progress, Review, Done).
- **Task Management**:
  - **Task Creation**: Users can create tasks, assign them to team members, set due dates, and add descriptions.
  - **Task Movement**: Tasks are draggable between columns to reflect their current status.
  - **Task Details**: Users can view and edit detailed information about each task.
  - **Project Overview**: Summary view of the project's progress, such as the number of tasks in each column and completion rates.

### 2. Real-Time Chat Integration:
- **Direct Messaging**: Team members can send and receive private messages in real-time.
- **Group Chats**: Project-specific chat rooms for discussing various aspects of the project.
- **Notifications**: Real-time notifications for new messages, task updates, and other relevant activities.
- **Message History**: Stores and displays chat history for direct messages and group chats.

### 3. Integration Between Kanban Board and Chat:
- **Task-Related Chats**: Discuss specific tasks directly within the Kanban board context. Clicking on a task can open a chat window related to that task.
- **Activity Stream**: Displays a feed of recent activities and messages related to the project, accessible from the Kanban board.


  ## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Socket.io
- **Frontend**: React.js, Axios,React Router DOM
- **Styling**: CSS 


## Installation

### Backend Setup

1. Clone the repository:
    ```bash
   https://github.com/ankitkanojiya07/Real-Time-Kanban-Board-with-Integrated-Chat-for-Group-Project-Management.git
    cd project-management-app/server
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

### Frontend Setup

1. Navigate to the `client` directory:
    ```bash
    cd ../client
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. The application will automatically connect to the backend server at `http://localhost:5000`.
3. Create a project, add tasks to the Kanban board, and start chatting with your team members in real-time.
