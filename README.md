# Student Management System

## Check if the ports are available:

netstat -ano | findstr :3306
netstat -ano | findstr :3000
netstat -ano | findstr :8080


## Running the Application

1. Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).
2. Clone the repository: git clone <repository-url>
3. Navigate to the project directory:cd <project-directory>
4. Start the application:docker-compose up --build
5. Access the application:
- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3000`

