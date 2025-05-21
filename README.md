# JobHook - Job Portal Application

JobHook is a full-stack job portal application consisting of a *Spring Boot backend* and a *React frontend*. It enables users to find jobs, apply, post jobs, manage profiles, and more.

---

## Project Structure

•⁠  ⁠*backend/* — Spring Boot backend application  
•⁠  ⁠*frontend/* — React.js frontend application

---

## Features

•⁠  ⁠User authentication with JWT  
•⁠  ⁠Role-based access control (Applicant, Recruiter)  
•⁠  ⁠Job posting, searching, and applying  
•⁠  ⁠Profile management (Experience, Certifications, Skills)  
•⁠  ⁠Notifications system  
•⁠  ⁠Responsive UI built with Material UI and React  
•⁠  ⁠RESTful APIs implemented using Spring Boot

---

## Prerequisites

•⁠  ⁠Java 17+ (or compatible with Spring Boot setup)  
•⁠  ⁠Maven 3.6+  
•⁠  ⁠Node.js 16+ and npm/yarn  
•⁠  ⁠MongoDB (local or cloud instance)  
•⁠  ⁠Optional: Docker (for containerization)

---

## Technologies Used

*Backend:*  
•⁠  ⁠Spring Boot  
•⁠  ⁠Spring Security  
•⁠  ⁠JWT (JSON Web Tokens)  
•⁠  ⁠Maven  
•⁠  ⁠MongoDB  

*Frontend:*  
•⁠  ⁠React  
•⁠  ⁠TypeScript  
•⁠  ⁠Redux Toolkit  
•⁠  ⁠Material UI  
•⁠  ⁠Axios  

*Others:*  
•⁠  ⁠Docker (optional)  
•⁠  ⁠RESTful API architecture

---

## Backend Setup (Spring Boot)

1.⁠ ⁠Navigate to the backend directory:

   ```bash
   cd backend
2.⁠ ⁠Configure MongoDB connection in src/main/resources/application.properties or application.yml:
spring.data.mongodb.uri=mongodb://localhost:27017/jobhook_db

Replace the URI with your MongoDB connection string if using a cloud service like MongoDB Atlas

3.⁠ ⁠Build and run the backend:
./mvnw clean install
./mvnw spring-boot:run

-- Or run directly from your IDE.


## Frontend Setup (React)

1.⁠ ⁠Navigate to the frontend directory: cd ../frontend

2.⁠ ⁠Install dependencies: npm install

3.⁠ ⁠Start the frontend development server: npm start

-- The frontend will be accessible at http://localhost:3000.


Contribution

Contributions are welcome! Feel free to fork the repo and submit pull requests. For issues or feature requests, please open an issue on GitHub.

Contact: 
Created by Saurav Singh
Email: sauravchauhan0017@gmail.com
