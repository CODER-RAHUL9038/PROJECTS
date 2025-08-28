# 📸 Instagram Clone (Mini Project)

This is a simple Instagram-like project built using **Node.js, Express, and RESTful APIs**.  
It allows users to create, update, and delete posts with captions and images.  
The UI is **fully responsive**, so it works well on both desktop and mobile screens.

---

Demo Link - 

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

GET /posts

### 2️⃣ Create a post

POST /posts

**Form Data:**

- `caption`: String
- `image`: File (uploaded via Multer)

### 3️⃣ Update a post

PUT /posts/:id

**Form Data:**

- `newCaption`: String
- `image`: File (optional)

### 4️⃣ Delete a post

DELETE /posts/:id

### 5️⃣ Get a post by ID

GET /posts/:id

**Response:** Returns the post object by ID

---

## ⚡ Installation & Setup

1. Clone this repo:

```bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone
Install dependencies:

---

npm install
Start the server:

---

node app.js
Or use nodemon for auto-restart:


---

npx nodemon app.js
Open in browser:

---

http://localhost:8080/posts
📸 Screenshots 
## 📸 Screenshots  

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

✅ Note: The app is fully responsive, so it looks good on desktop, tablet, and mobile devices.
```
