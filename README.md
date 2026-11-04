# ☁️ Cloud-Based Student Feedback Management System

A cloud-based web application that allows students to submit feedback on academic subjects and view previously submitted feedback.

The project demonstrates the practical implementation of **Cloud Computing** using **Firebase Cloud Firestore** and **Firebase Hosting**, without requiring a traditional backend server.

## 🚀 Features

- **Student Feedback Submission** — Submit feedback with student name, subject, rating, and comments.
- **Cloud Database Integration** — Store feedback in Firebase Cloud Firestore.
- **Feedback Retrieval** — Retrieve and display submitted feedback from the cloud.
- **Rating System** — Rate subjects on a scale of 1 to 5.
- **Responsive Design** — Accessible through desktops, tablets, and smartphones.
- **Cloud Hosting** — Deploy the website using Firebase Hosting.
- **Input Validation** — Validate feedback before submission.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application functionality |
| Firebase Cloud Firestore | Cloud database |
| Firebase Hosting | Website deployment |
| Git & GitHub | Version control |

## 🏗️ System Architecture

```text
        Student / User
               |
               v
        Web Application
       (HTML, CSS, JS)
               |
               v
         Firebase SDK
               |
               v
      Firebase Cloud Firestore
               |
               v
       Store / Retrieve Data
```

Firebase Hosting serves the web application, while Cloud Firestore stores and retrieves feedback.

## 📁 Project Structure

```text
student-feedback-cloud/
│
├── index.html       # Student feedback interface
├── style.css        # Website styling
├── app.js           # Firebase integration
├── firebase.json    # Firebase Hosting configuration
├── .firebaserc      # Firebase project configuration
├── .gitignore       # Git ignored files
└── README.md        # Project documentation
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/DhanushJ04/student-feedback-cloud.git
cd student-feedback-cloud
```

### 2. Configure Firebase

1. Create a project in [Firebase Console](https://console.firebase.google.com/).
2. Register a Firebase web application.
3. Enable Cloud Firestore.
4. Configure appropriate Firestore Security Rules.
5. Copy your Firebase web configuration.
6. Replace the `firebaseConfig` object in `app.js` with your own configuration.

### 3. Run Locally

Open a terminal inside the project directory and run:

```bash
python -m http.server 5500
```

Open your browser and visit:

http://localhost:5500

### 4. Deploy to Firebase Hosting

Install Firebase CLI:

```bash
npm install -g firebase-tools
```

Log in:

```bash
firebase login
```

Initialize Firebase Hosting if it has not already been configured:

```bash
firebase init hosting
```

Deploy:

```bash
firebase deploy --only hosting
```

Firebase will provide a public Hosting URL after successful deployment.

## 🔄 Application Workflow

1. The student opens the feedback website.
2. The student enters their name and selects a subject.
3. The student provides a rating and feedback.
4. JavaScript validates the submitted information.
5. Firebase SDK sends the data to Cloud Firestore.
6. Firestore stores the feedback as a document.
7. The application retrieves and displays submitted feedback.

## ☁️ Cloud Computing Concepts Demonstrated

- **Database as a Service (DBaaS):** Firestore provides a managed cloud database.
- **Serverless Backend:** Firebase manages the database infrastructure.
- **Cloud Hosting:** Firebase Hosting makes the website accessible online.
- **Remote Data Access:** Feedback can be accessed across different devices.
- **Scalability:** Firebase provides managed infrastructure that can scale with usage.

## 🔐 Security

The academic demonstration uses Firestore Security Rules to validate feedback submissions and prevent client-side modification or deletion.

The demonstration currently allows public feedback reading and submission. Therefore, only fictional student information should be used.

For production use, authentication, stricter authorization, abuse protection, and appropriate privacy controls should be implemented.

## 🔮 Future Enhancements

- Student and administrator authentication
- Admin dashboard
- Feedback analytics and charts
- Subject-wise feedback filtering
- Average rating calculation
- Export feedback reports
- Real-time feedback updates
- Role-based access control

## 🎓 Academic Purpose

This project was developed as a **Cloud Computing Mini Project** to demonstrate cloud database integration, serverless services, and web application deployment.

## 👨‍💻 Developer

**Dhanush J**

GitHub: [DhanushJ04](https://github.com/DhanushJ04)

## 📄 License

Created for educational and academic demonstration purposes. No open
