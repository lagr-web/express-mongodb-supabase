
### Node.js Express Server with MongoDB and Supabase

> This educational project showcases the integration of Express, MongoDB, and Supabase in a full-stack application. Students can explore and understand how these technologies work together to create a functional web application with CRUD operations.

**Overview:**
This Node.js Express server serves as a backend API, demonstrating CRUD operations with MongoDB for data storage and Supabase for authentication.

**Dependencies:**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "morgan": "^1.10.0",
    "nodemon": "^3.0.1",
    "mongodb": "^6.3",
    "@supabase/ssr": "^0.0.10",
    "@supabase/supabase-js": "^2.38.4"
  }
}
```

**API Endpoints and CRUD Operations:**
1. **Create User (POST):**
   - Endpoint: `/api/users`
   - Body: JSON payload with user details.
   - MongoDB: Create a new user.
   - Supabase: Add user authentication.

2. **Get All Users (GET):**
   - Endpoint: `/api/users`
   - MongoDB: Retrieve all users from the database.

3. **Get User by ID (GET):**
   - Endpoint: `/api/users/:id`
   - MongoDB: Retrieve a user by their ID.

4. **Update User by ID (PUT):**
   - Endpoint: `/api/users/:id`
   - Body: JSON payload with updated user details.
   - MongoDB: Update user details.

5. **Delete User by ID (DELETE):**
   - Endpoint: `/api/users/:id`
   - MongoDB: Delete a user by their ID.

**Installation and Run:**
```bash
npm install
npm run server
```

---

### Next.js 14 Project

**Overview:**
This Next.js 14 project serves as a frontend, consuming the API provided by the Node.js Express server for educational purposes.

**Dependencies:**
```json
{
  "dependencies": {
    "next": "14.0.3",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.3"
  }
}
```

**Installation and Run:**
```bash
npm install
npm run dev
```

**Usage:**
1. Connect the Next.js frontend with the Node.js Express server's API endpoints.
2. Fetch and display user data using React components.
3. Implement user interface components for creating, updating, and deleting users.

