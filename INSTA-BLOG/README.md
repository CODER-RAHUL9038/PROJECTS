# Insta-Blog

A simple Instagram-like blog built with **Node.js**, **Express**, **EJS**, and **Multer** for image uploads.

## 🚀 Features

- View all posts  
- View a post by ID  
- Create a new post (with image upload)  
- Edit/update a post  
- Delete a post  

## 📝 API Endpoints

### 1️⃣ Get all posts
```http
GET /posts


2. Get a post by ID
GET /posts/:id


3. Create a post

Form Data:

caption: String

image: File (uploaded via Multer)
POST /posts

4. Update a post

Form Data:

newCaption: String

image: File (optional)
PUT /posts/:id

5. Delete a post
DELETE /posts/:id

⚡ Installation & Setup

1. Clone this repo
git clone https://github.com/your-username/insta-blog.git
cd insta-blog

2. Install dependencies
npm install

3. Start the server
node index.js

Or use nodemon for auto-restart:
npx nodemon index.js

4. Open in browser


## 🏠 Screenshots

### Code Base
![Code Base](./snap/image1.png)

### Home Page
![Home Page](./snap/image2.png)

### Post in Detail
![Post in Detail](./snap/image3.png)

### Edit Post
![Edit Post](./snap/image4.png)

## 🔮 Future Improvements

- Add user authentication (login/signup)
- Store posts in a real database (MongoDB / PostgreSQL)
- Add likes & comments feature
- Enhance UI with advanced styling
