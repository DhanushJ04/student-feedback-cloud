
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3mYe2djDPnkbEOhGv_N50Zp8ZsSENoqg",
  authDomain: "student-feedback-cloud.firebaseapp.com",
  projectId: "student-feedback-cloud",
  storageBucket: "student-feedback-cloud.firebasestorage.app",
  messagingSenderId: "833543868043",
  appId: "1:833543868043:web:63573c41f20d4098678e8e",
  measurementId: "G-TBX3BDXYTG"
};

// STEP 2: Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// STEP 3: Get HTML elements
const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const feedbackList = document.getElementById("feedbackList");
const refreshBtn = document.getElementById("refreshBtn");

// STEP 4: Submit feedback to Firestore
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value;
  const rating = Number(document.getElementById("rating").value);
  const feedback = document.getElementById("feedback").value.trim();

  if (!name || !subject || !feedback ||
      !Number.isInteger(rating) ||
      rating < 1 || rating > 5) {
    message.textContent = "Please complete all fields.";
    message.style.color = "red";
    return;
  }

  submitBtn.disabled = true;
  message.textContent = "Submitting feedback...";
  message.style.color = "#2563eb";

  try {
    await addDoc(collection(db, "feedback"), {
      name: name,
      subject: subject,
      rating: rating,
      feedback: feedback,
      createdAt: serverTimestamp()
    });

    message.textContent = "Feedback submitted successfully!";
    message.style.color = "green";

    form.reset();
    await loadFeedback();

  } catch (error) {
    console.error("Firebase error:", error);
    message.textContent = "Error: " + error.message;
    message.style.color = "red";
  } finally {
    submitBtn.disabled = false;
  }
});

// STEP 5: Retrieve and display feedback
async function loadFeedback() {
  feedbackList.textContent = "Loading feedback...";

  try {
    const snapshot = await getDocs(collection(db, "feedback"));

    feedbackList.replaceChildren();

    if (snapshot.empty) {
      feedbackList.textContent = "No feedback available yet.";
      return;
    }

    const records = snapshot.docs.map(doc => doc.data());

    records.sort((a, b) =>
      (b.createdAt?.seconds ?? 0) -
      (a.createdAt?.seconds ?? 0)
    );

    records.forEach(data => {
      const item = document.createElement("div");
      item.className = "feedback-item";

      const heading = document.createElement("h3");
      heading.textContent = data.name;

      const subjectText = document.createElement("p");
      subjectText.textContent = "Subject: " + data.subject;

      const ratingText = document.createElement("p");
      ratingText.textContent = "Rating: " + data.rating + "/5";

      const comment = document.createElement("p");
      comment.textContent = "Feedback: " + data.feedback;

      item.append(
        heading,
        subjectText,
        ratingText,
        comment
      );

      feedbackList.appendChild(item);
    });

  } catch (error) {
    console.error("Error loading feedback:", error);
    feedbackList.textContent = "Error: " + error.message;
  }
}

// STEP 6: Refresh feedback
refreshBtn.addEventListener("click", loadFeedback);

// STEP 7: Load feedback when the website opens
loadFeedback();
