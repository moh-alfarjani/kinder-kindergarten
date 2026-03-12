# Kinder - منشأة تعليمية للأطفال 🎨

A modern, full-stack web application designed for a Kindergarten establishment. This project provides a comprehensive online presence, allowing parents to explore the curriculum, learn about the teachers, and easily enroll their children.

## 🚀 Technologies Used

This project is built using a robust and scalable architecture:

### Frontend
*   **React.js:** For building a dynamic, component-driven, and fast user interface (SPA).
*   **React Router DOM:** For seamless navigation and routing between pages.
*   **Axios:** For handling secure API requests to the backend.
*   **CSS / Bootstrap:** For responsive, mobile-first, and modern styling.

### Backend
*   **Django:** A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
*   **Django REST Framework (DRF):** For building powerful, robust, and flexible Web APIs to serve the frontend.
*   **PostgreSQL / SQLite:** Relational database management for storing user data, enrollments, and website content securely.

## 🌟 Key Features
*   **Interactive & Responsive UI:** Smooth animations and completely fluid navigation across all devices (Desktop, Tablet, Mobile).
*   **Class Programs Overview:** Detailed information about available classes (e.g., Drawing, Language, Basic Science).
*   **Teacher Profiles:** Meet the team of qualified educators.
*   **Secure Online Enrollment:** Secure and user-friendly registration forms for parents.
*   **Testimonials & Gallery:** Showcasing the kindergarten's vibrant environment and parent feedback.
*   **Admin Dashboard (Django Admin):** Fully-featured backend dashboard for easy management of content, classes, messages, and student enrollments.

## 🛠️ Installation & Setup (Local Development)

### Prerequisites
*   Node.js (v14+) & npm (Frontend)
*   Python 3.8+ (Backend)

### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server (runs on `http://localhost:3000`):
   ```bash
   npm start
   ```

### Backend Setup (Django)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run database migrations to set up the schema:
   ```bash
   python manage.py migrate
   ```
5. Create a superuser to access the admin panel:
   ```bash
   python manage.py createsuperuser
   ```
6. Start the Django development server (runs on `http://localhost:8000`):
   ```bash
   python manage.py runserver
   ```

## 🤝 Contribution
Feel free to fork this project, create a feature branch, and submit a Pull Request.

## 📄 License
This project is for demonstration purposes.
