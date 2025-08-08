# 📚 Manga Mound

**Manga Mound** is a mobile application built with **React Native** and **Expo**, designed for manga enthusiasts to discover, read, and track their favorite manga series. The app uses **Firebase** as a backend for data storage, user authentication, and real-time updates.

---

## 🚀 Features

- 🔍 Browse popular and new manga titles
- 📖 View manga details, including descriptions and chapter lists
- 📂 Read manga directly in the app (planned)
- 🌈 Beautiful UI with static background and scrollable content
- 🔐 Firebase Authentication
- ☁️ Firebase Firestore for storing manga data

---

## 🧪 Tech Stack

- **Frontend:** [React Native](https://reactnative.dev/), [Expo Go](https://expo.dev/)
- **Backend:** [Firebase](https://firebase.google.com/)
  - Firebase Authentication
  - Cloud Firestore
  - (Optional: Firebase Storage, Functions)

---

## 📱 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/manga-mound.git
   cd manga-mound
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase:**

   - Create a Firebase project at [firebase.google.com](https://firebase.google.com/).
   - Enable Authentication (email/password or other providers).
   - Create a Firestore database.
   - Add a new web app in Firebase and copy the config.
   - Replace the Firebase config in your `firebaseConfig.js` file.

4. **Start the app with Expo:**

   ```bash
   npx expo start
   ```

5. **Scan the QR code** using [Expo Go](https://expo.dev/client) on your iOS/Android device to view the app.

---

## 📁 Project Structure

```
MangaMound/
├── assets/               # Image assets
├── components/           # Reusable components (e.g., MangaCard, ChapterList)
├── screens/              # App screens (Home, Details, etc.)
├── firebaseConfig.js     # Firebase configuration
├── App.js                # Entry point
└── ...
```

---

## ✨ Future Enhancements

- In-app manga reading experience
- User libraries and bookmarking
- Push notifications for new chapters
- Offline reading mode
- Genre filtering and advanced search

---

## 🛠️ Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- Manga data source TBD
