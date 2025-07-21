Absolutely! Below is an **updated README** for your project, reflecting your new tech stack (Next.js App Router, PostgreSQL/Prisma, Clerk, UploadThing, TypeScript) and updated feature set. The wording emphasizes modern and professional social networking, clarity about technologies, and accurate setup instructions.

# ✨ MediaMojo

MediaMojo is a modern, fully responsive social media platform where users can connect, share, and engage through posts, images, and interactions. Built with cutting-edge technologies like Next.js, PostgreSQL with Prisma, Clerk, UploadThing, and TypeScript, MediaMojo offers a vibrant community experience with robust security and mobile-first design.

## 🚀 Tech Stack

- **Next.js App Router** — Advanced React framework for routing, SSR & SSG
- **PostgreSQL & Prisma** — Scalable, reliable database management with an intuitive ORM
- **Clerk** — Seamless authentication and user management (including Google sign-in)
- **UploadThing** — Effortless file and image uploads
- **TypeScript** — Strongly typed JavaScript for robust, safer development
- **Tailwind CSS** — Rapid, utility-first UI styling

## 🧩 Features

- **Google Authentication** — Easy sign up/login using Google
- **User Profiles** — View, edit, and personalize your user profile
- **Follow System** — Follow/unfollow others to curate your feed and connections
- **Feed & Posts** — Share thoughts with text + images, and explore posts from your network
- **Like & Comment** — Engage meaningfully on posts
- **Real-time Notifications** — Get notified for new followers, comments, and likes
- **Media Uploads** — Share photos with your posts using UploadThing
- **Responsive Design** — Looks fantastic on desktop, tablet, and mobile
- **Security** — Uses JWT tokens, password hashing, and protected API routes
- **Modern UI** — Built with Tailwind CSS for a fresh social experience

## 🔧 Local Setup

### Prerequisites

- Node.js (18+ recommended)
- PostgreSQL database (local or cloud, e.g. Neon)
- Clerk account ([Clerk.dev](https://clerk.dev))
- UploadThing account ([UploadThing.com](https://uploadthing.com))

### 1. Clone the Repository

```bash
git clone https://github.com/sahilbambarkar/mediamojo-social-site.git
cd mediamojo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root with your credentials:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
DATABASE_URL=your-postgres-connection-url
UPLOADTHING_TOKEN=your-uploadthing-token
```

### 4. Database Setup
Certainly! Here’s a **clear, concise update** for your README’s database setup section:

### 4. Set up the Database

**a. Install Prisma (if you haven’t already):**
```bash
npm install prisma --save-dev
```
**b. make  schema to the database:**

**c. Push your schema to the database:**
```bash
npx prisma db push
```

This will sync your `schema.prisma` with your database.

---

### 5. Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

