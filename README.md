

# JenteFAK Frontend

This project was created with [Create React App](https://github.com/facebook/create-react-app). You can run this app in development mode using `npm`, or deploy it using Docker as a containerized production app.

---

## Getting Started with Create React App

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!



---

## Docker Setup

This section explains how to set up Docker and run the JenteFAK frontend application as a Docker container.

### Prerequisites

Make sure Docker is installed on your system:
- [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker for macOS](https://docs.docker.com/docker-for-mac/install/)
- [Docker for Linux](https://docs.docker.com/engine/install/)

Verify Docker is installed by running:

```bash
docker --version
```

### Step 1: Clone the Repository

Clone the JenteFAK frontend repository to your local machine using https:

```bash
git clone git@github.com:JeNTe-FAK/front.git
cd jentefak-frontend
```

or by using SSH
```bash
git clone https://github.com/JeNTe-FAK/front.git
cd jentefak-frontend
```

### Step 2: Build the Docker Image

Once you have the repository cloned, build the Docker image for the frontend using the provided `Dockerfile`:

```bash
docker build -t jentefak-frontend:latest .
```

This will build the Docker image for production, using a multi-stage build to first create the React app and then serve it using Nginx.

### Step 3: Run the Docker Container

After building the Docker image, run the container:

```bash
docker run -p 3000:80 jentefak-frontend:latest
```

This command maps port `3000` on your local machine to port `80` inside the Docker container, where Nginx is serving the app.

### Step 4: Access the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the JenteFAK frontend running.

### Step 5: Stop the Docker Container

To stop the container, either press `CTRL + C` in the terminal where the container is running or stop it using the following command:

1. Get the container ID:
   ```bash
   docker ps
   ```

2. Stop the container:
   ```bash
   docker stop <container-id>
   ```

### Optional: Push the Docker Image to Docker Hub

To share your Docker image via Docker Hub, follow these steps:

1. **Log in to Docker Hub**:
   ```bash
   docker login
   ```

2. **Tag the Docker image**:
   Replace `your-dockerhub-username` with your Docker Hub username:
   ```bash
   docker tag jentefak-frontend:latest your-dockerhub-username/jentefak-frontend
   ```

3. **Push the image**:
   ```bash
   docker push your-dockerhub-username/jentefak-frontend
   ```

---

## Common Docker Commands

- **List running containers**:
  ```bash
  docker ps
  ```

- **Stop a running container**:
  ```bash
  docker stop <container-id>
  ```

- **Remove a container**:
  ```bash
  docker rm <container-id>
  ```

- **Remove an image**:
  ```bash
  docker rmi <image-id>
  ```

---

