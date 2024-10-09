<h1>🌟 MediaMojo</h1>
<h3>MediaMojo is a fully responsive social media platform where users can connect, share, and interact through posts. With modern features like likes, shares, comments, notifications, privacy settings, and much more, MediaMojo brings together an engaging community experience. Built with Firebase and React using Vite for the frontend, along with TailwindCSS for sleek styling.</h3>


## 🎯 Features
**User Authentication:** Secure account creation and login with Firebase Authentication.

**Posts:** Users can create posts, like, share, comment, and save posts.

**Real-time Notifications:** Users are notified when someone interacts with their posts (e.g., likes, unlikes).

**Follow System:** Follow other users and keep track of their posts.

**Feed Sections:** Two feed sections – All Posts and Following Posts.

**Account Privacy:** Set your account to private or public.

**Report Abuse:** Report posts or users that violate community guidelines.

**Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.



## 🚀Technologies
**Frontend:** React (with Vite), TailwindCSS

**Backend:** Firebase (Authentication, Firestore, Storage)

**Hosting:** Vercel

**Real-time Functionality:** Firebase Realtime Database & Firestore




<h3>##💻Local Development<h3/>

### Prerequisites

- Node.js installed
- Firebase Project with Auth, Firestore, and Storage enabled

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mediamojo.git
   cd mediamojo
   ```
2. Install dependencies:

```bash

npm install
```



3. Set up Firebase:

a. Go to Firebase Console.

b. Create a new project and enable Firebase Authentication, Firestore, and Storage.

c. Get your Firebase configuration keys and add them to your .env.local file:


```bash

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```


4. Run the project locally:

```bash

npm run dev
```

Open your browser and navigate to http://localhost:5173.


<h2>Live Demo:https://prodigy-fs-05.vercel.app/</h2>
