💬 Message from Angelyn

Hello there,

This project was developed using Next.js for the frontend, along with Material UI (MUI) for layout and components. Initially, I spent quite a bit of time exploring how routing works in Next.js (was too used to just creating files inside pages directly 😅). But I managed to organize and route everything properly in the end!

🔐 Login page: /auth/login2

📰 Post list page: /posts

🏠 You can also click the header logo/name to go to the post list.

MUI's Grid and Box components were mainly used for a clean and responsive layout.
Posts are paginated (10 per page), and I used icons to replace text buttons (like a trash bin for "Delete").

Feel free to contact me if you have any questions—my contact info is in the CV!
(Not sharing it in public GitHub la hahaha ><)

Best,
Angelyn

------------------------------------------------------------------------------------------
🎥 👉 Click here for the screen recording demo -> https://drive.google.com/file/d/1rgi58rDltFK5uUA4cpkjzaACiQqWO6FJ/view

------------------------------------------------------------------------------------------
✅ Features Implemented
🔐 Authentication & Authorization
Simulated login/logout using hardcoded user credentials and app state.

Two user roles supported:

- Read-only User: Can view list of posts and comments.

- Admin User: Can view, edit, and delete posts and comments.
------------------------------------------------------------------------------------------

🧭 Page Structure
/auth/login2 – Login Page

/posts – Post List Page with pagination

/posts/[id] – Post Details Page

------------------------------------------------------------------------------------------

🔄 Auth-Based UI Behavior
Header dynamically shows Login or Logout button based on auth state.

If logged in as Admin:

- Can edit post title directly on the post details page.

- Can delete posts from the post details page.

- Can delete individual comments below the post.

🚫 No Backend Required
No actual backend or API—everything is simulated.

CRUD operations are handled via React state and/or localStorage to mimic API behavior.

------------------------------------------------------------------------------------------
🧰 UI/UX Details
- Built using Material UI (MUI) for modern UI components.

- Used Icons instead of wordy buttons for actions like delete.

- Pagination for a better browsing experience on the post list page.

------------------------------------------------------------------------------------------
🚀 Getting Started
Development Setup
bash
npm install
npm run dev
Open http://localhost:3000 in your browser.

------------------------------------------------------------------------------------------
🛠 Tech Stack
Next.js – React framework for SSR & routing

Material UI (MUI) – UI component library

Local Storage – Used to simulate backend persistence

React State Management – For auth and UI logic
