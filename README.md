 To-Do Next.jsApp
Overview
This project is a to-do list application built with Next.js, MongoDB, and Tailwind CSS. It allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks, providing functionality to add, delete, and update tasks (mark as complete or pending).

Tech Stack
Next.js: A React framework to develop full-stack web applications.

MongoDB: A NoSQL database to store the to-do list data.

Tailwind CSS: A utility-first CSS framework for styling the application.

Features
Add new tasks to the to-do list.

Delete tasks from the to-do list.

Update tasks to mark them as complete or pending.

View all tasks in the to-do list.

Installation
Clone the Repository

bash
git clone https://github.com/singhshubham593/todo-next-app.git
cd todo-next-app
Install Dependencies

bash
npm install
Setup MongoDB

Create a MongoDB database.

Create a .env.local file in the root directory and add your MongoDB connection string:

env
MONGODB_URI=your-mongodb-connection-string
Run the Application

bash
npm run dev
Open the App

Open your browser and navigate to http://localhost:3000.

 
Usage
Adding a New Task
To add a new task, enter the task description in the input field and click the "Add" button. The new task will be added to the list and stored in the MongoDB database.

Deleting a Task
To delete a task, click the "Delete" button next to the task you want to remove. The task will be deleted from the list and the database.

Updating a Task
To mark a task as complete or pending, click the "Update" button next to the task. The task status will be updated accordingly in the list and the database.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.
