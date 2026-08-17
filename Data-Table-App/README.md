# 📊 Data Table Management App

A modern and responsive **User Data Management Dashboard** built with **Next.js, React, and Tailwind CSS**.

This project allows users to view, search, sort, add, edit, delete, and manage user information through a clean and professional data table interface.

---

Project Video Link = https://drive.google.com/file/d/1jsrMgaN8NZdecnONWotXJdywYAOhqsO5/view?usp=sharing

## 🚀 Project Overview

The **Data Table Management App** is a CRUD-based dashboard designed to demonstrate how to manage data efficiently in a React/Next.js application.

The application fetches user data from a REST API and provides an interactive table with features such as:

- 🔍 Search users
- ↕️ Sort users
- 👁️ View user details
- ✏️ Edit user information
- 🗑️ Delete users
- ➕ Add new users
- 📄 Pagination
- ✅ Form validation
- 🔄 API integration
- 📱 Responsive UI

---

## ✨ Features

### 👥 User Management

Users can:

- Add a new user
- View user details
- Edit existing users
- Delete users
- View all users in a structured table

---

### 🔍 Search

The search functionality allows users to search by:

- Name
- Email
- Phone
- City

Search results update dynamically as the user types.

---

### ↕️ Sorting

Users can sort the table data by:

- Name
- Email

Sorting supports:

- Ascending order
- Descending order

---

### 📄 Pagination

The application divides users into multiple pages to make large datasets easier to manage.

Pagination includes:

- Previous button
- Next button
- Page numbers
- Total results count
- Current result range

---

### 📝 Add & Edit User

A reusable form is used for both creating and updating users.

The form includes:

- Name
- Email
- Phone
- City

Form validation is also implemented to prevent invalid or empty data.

---

### 🗑️ Delete User

Users can be deleted directly from the table.

Before deleting a user, the application displays a confirmation message.

---

### 🎨 Modern UI

The project uses a clean and responsive dashboard design with:

- Tailwind CSS
- Responsive table
- Modal forms
- Icon-based actions
- User avatars
- Hover effects
- Empty states
- Responsive layouts

---

## 🛠️ Technologies Used

| Technology   | Purpose            |
| ------------ | ------------------ |
| Next.js      | React framework    |
| React.js     | UI development     |
| JavaScript   | Application logic  |
| Tailwind CSS | Styling            |
| REST API     | Data communication |
| JSON Server  | Local backend/API  |
| Fetch API    | HTTP requests      |

---

## 📂 Project Structure

```text
Data-Table-App/
│
├── app/
│   ├── components/
│   │   ├── DataTable.jsx
│   │   ├── SearchBar.jsx
│   │   ├── UserTable.jsx
│   │   ├── UserForm.jsx
│   │   ├── Pagination.jsx
│   │   └── UserViewModal.jsx
│   │
│   ├── page.jsx
│   └── layout.jsx
│
├── public/
│
├── db.json
│
├── package.json
│
├── next.config.mjs
│
└── README.md
```
