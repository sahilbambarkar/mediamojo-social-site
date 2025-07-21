# ✨ Socially ✨

A modern social media platform where users can register, log in, interact with posts, and connect with others. Explore the features below!

## 🚀 Tech Stack

- **Next.js App Router**: Powerful routing with support for dynamic and static routes
- **PostgreSQL & Prisma**: Reliable database management with an ORM
- **Clerk**: Authentication and user management
- **TypeScript**: Strongly-typed JavaScript for a safer development experience

## 🧩 Features

- **Google Authentication**: Users can easily log in or register using their Google account.
- **User Profile**: Each user can view and update their profile information.
- **Follow/Unfollow**: Users can follow or unfollow other users to manage their feed and connections.
- **Create & Delete Posts**: Users can create posts, share their thoughts, and delete their posts when needed.
- **Like & Comment on Posts**: Engage with others by liking and commenting on posts.
- **Notifications**: Users receive notifications for activities like follows, comments, and likes on their posts.
- **Post Media**: Users can upload image with their posts to enrich their content.
- **Responsive Design**: The platform is mobile-friendly and optimized for all screen sizes.
- **Security**: Secure API routes with JWT tokens and password hashing to protect user data.

## 🔧 Setup

### Environment Variables

Make sure to set up your `.env` file with the following keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key
DATABASE_URL=your-database-connection-string
UPLOADTHING_TOKEN=your-uploadthing-token
```

### Live Link 
[Socially](https://socially-orcin.vercel.app/)
