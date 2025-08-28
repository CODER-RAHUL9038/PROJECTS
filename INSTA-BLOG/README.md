# 📸 InstaBlog (Mini Project)

This is a simple Instagram-like project built using **Node.js, Express, and RESTful APIs**.  
It allows users to create, update, and delete posts with captions and images.  
The UI is **fully responsive**, so it works well on both desktop and mobile screens.

---

## 🚀 Features

- ➕ Create a new post with an image & caption  
- 📄 View all posts  
- ✏️ Update captions and images of a post  
- ❌ Delete posts  
- 🖼️ Image upload support using **Multer**  
- 📡 RESTful API structure  
- ✅ Fully responsive design  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **File Upload:** Multer  
- **Templating:** EJS  
- **Database:** Currently using in-memory array; can be extended to MongoDB/MySQL  

---

## 📂 API Endpoints

### 1️⃣ Get all posts
```http
GET /posts
2️⃣ Get a post by ID
http
Copy code
GET /posts/:id
3️⃣ Create a post
http
Copy code
POST /posts
Form Data:

caption: String

image: File (uploaded via Multer)

4️⃣ Update a post
http
Copy code
PUT /posts/:id
Form Data:

newCaption: String

image: File (optional)

5️⃣ Delete a post
http
Copy code
DELETE /posts/:id
⚡ Installation & Setup
Clone this repo:

bash
Copy code
git clone https://github.com/your-username/insta-blog.git
cd insta-blog
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node app.js
Or use nodemon for auto-restart:

bash
Copy code
npx nodemon app.js
Open in browser:

bash
Copy code
http://localhost:3000/posts

---
### 📝 Code Base  
![Code Base](./snap/image1.png)  

### 🏠 Home Page  
![Home Page](./snap/image2.png)  

### 📄 Post in Detail  
![Post in Detail](./snap/image3.png)  

### ✏️ Edit Post  
![Edit Post](./snap/image4.png)  

---

🔮 Future Improvements
Add user authentication (login/signup)

Store posts in a real database (MongoDB / PostgreSQL)

Add likes & comments feature

Enhance UI with advanced styling