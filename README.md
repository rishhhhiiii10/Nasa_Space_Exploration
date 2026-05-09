<div align="center">

```
 ███╗   ██╗ █████╗ ███████╗ █████╗
 ████╗  ██║██╔══██╗██╔════╝██╔══██╗
 ██╔██╗ ██║███████║███████╗███████║
 ██║╚██╗██║██╔══██║╚════██║██╔══██║
 ██║ ╚████║██║  ██║███████║██║  ██║
 ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
      S P A C E   E X P L O R A T I O N
```

*"The universe is under no obligation to make sense to you."*
— Neil deGrasse Tyson

[![JavaScript](https://img.shields.io/badge/JavaScript-89.4%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://github.com/rishhhhiiii10/Nasa_Space_Exploration)
[![HTML](https://img.shields.io/badge/HTML-9.1%25-E34F26?style=flat-square&logo=html5&logoColor=white)](https://github.com/rishhhhiiii10/Nasa_Space_Exploration)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://github.com/rishhhhiiii10/Nasa_Space_Exploration)
[![MongoDB](https://img.shields.io/badge/MongoDB-Connected-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://github.com/rishhhhiiii10/Nasa_Space_Exploration)
[![License: ISC](https://img.shields.io/badge/License-ISC-blueviolet?style=flat-square)](https://opensource.org/licenses/ISC)
[![Live on AWS EC2](https://img.shields.io/badge/AWS%20EC2-Live%20%F0%9F%9F%A2-FF9900?style=flat-square&logo=amazon-aws&logoColor=white)](http://13.234.34.115:8000/)

### 🟢 Live Demo → [http://13.234.34.115:8000/](http://13.234.34.115:8000/)

</div>

---

## 🌌 What Is This?

A full-stack web application that brings the cosmos to your browser. Built on a **React** frontend and a **Node.js/Express** backend, this project taps into the wonders of NASA's data — planets, launches, missions — all wrapped in a clean, modern interface.

Whether you're a stargazer or a developer, this app is your launchpad. 🛸

---

## 🪐 The Solar System of This Stack

```
                    ☀️  NASA APIs
                         │
           ┌─────────────┴─────────────┐
           │                           │
     🌍 React Client           🔭 Express Server
     (Create React App)        (Node.js + Morgan)
           │                           │
           └─────────────┬─────────────┘
                         │
                    🪐 MongoDB
                   (via Mongoose)
                         │
                    🐳 Docker
                (node:lts-alpine)
                         │
                   ☁️  AWS EC2
            (Production — ap-south-1)
              http://13.234.34.115:8000
```

---

## 📁 Mission Control — Project Structure

```
Nasa_Space_Exploration/
│
├── 🖥️  client/            ← React frontend (the face of the cosmos)
│
├── ⚙️  server/            ← Node.js backend (the brain of the operation)
│
├── 🐳  Dockerfile         ← Containerized & ready for liftoff
├── 📦  package.json       ← Mission command scripts
├── 🙈  .gitignore
└── 🐋  .dockerignore
```

---

## 🚀 Pre-Launch Checklist

Before you fire the engines, make sure you have:

- [ ] 🟢 **Node.js** (LTS) — [Download](https://nodejs.org/)
- [ ] 📦 **npm** — comes with Node
- [ ] 🍃 **MongoDB** — local or [MongoDB Atlas](https://www.mongodb.com/atlas)
- [ ] 🐳 **Docker** — optional, for containerized launch

---

## 🛸 Launch Sequence

### Step 1 — Clone the Repository

```bash
git clone https://github.com/rishhhhiiii10/Nasa_Space_Exploration.git
cd Nasa_Space_Exploration
```

### Step 2 — Install All Systems

```bash
npm run install
```

> This installs dependencies for both `client/` and `server/` in one go. ✅

### Step 3 — Configure Your Environment

Create a `.env` inside the `server/` directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=8000
```

> 🔐 Keep this file secret. It's already in `.gitignore` — you're safe.

### Step 4 — Ignition! 🔥

```bash
npm run watch
```

This launches both the React dev server and the Express backend simultaneously. Open your browser and explore the universe at `http://localhost:3000`.

---

## 🌠 All Mission Commands

| Command | What It Does |
|---|---|
| `npm run install` | 📦 Install all dependencies (client + server) |
| `npm run install-server` | ⚙️ Install server dependencies only |
| `npm run install-client` | 🖥️ Install client dependencies only |
| `npm run watch` | 🔭 Start both client & server (dev mode) |
| `npm run server` | ⚡ Start server with file watching |
| `npm run client` | 🌐 Start React dev server only |
| `npm run deploy` | 🚀 Build client & launch production server |
| `npm run deploy-cluster` | 🌌 Multi-core cluster mode deployment |
| `npm test` | 🧪 Run all tests (client + server) |

---

## 🏗️ Production Launch

### Standard Mission

```bash
npm run deploy
```

Builds the React app into static files and serves everything from the Express server on port `8000`.

### Warp Speed — Cluster Mode 🌌

```bash
npm run deploy-cluster
```

Deploys across multiple CPU cores using Node.js clustering — ideal for heavy traffic and production environments.

---

## ☁️ AWS EC2 — Live in Production

The app is deployed and running on an **AWS EC2** instance in the `ap-south-1` (Mumbai) region.

| Detail | Value |
|---|---|
| 🌐 Live URL | [http://13.234.34.115:8000/](http://13.234.34.115:8000/) |
| ☁️ Cloud Provider | Amazon Web Services (AWS) |
| 🖥️ Instance | EC2 (Amazon Linux / Ubuntu) |
| 🌍 Region | ap-south-1 (Mumbai) |
| 🚢 Deployment | Docker container on EC2 |
| 🔌 Port | 8000 (publicly exposed) |

### How It's Deployed

```bash
# 1. SSH into your EC2 instance
ssh -i your-key.pem ec2-user@13.234.34.115

# 2. Clone the repo
git clone https://github.com/rishhhhiiii10/Nasa_Space_Exploration.git
cd Nasa_Space_Exploration

# 3. Build the Docker image
docker build -t nasa-space-exploration .

# 4. Run the container (detached)
docker run -d -p 8000:8000 --restart unless-stopped nasa-space-exploration
```

> 💡 Make sure port `8000` is open in your EC2 **Security Group** inbound rules.

---

## 🐳 Docker: Containerized to the Stars

> No `npm` drama. No version conflicts. Just pure, hermetic liftoff.

### Build the Image

```bash
docker build -t nasa-space-exploration .
```

### Launch the Container

```bash
docker run -p 8000:8000 nasa-space-exploration
```

Mission control is now live at 👉 **http://localhost:8000**

> The Docker image uses `node:lts-alpine` — lightweight and fast. The client is built inside the container and served by Express.

---

## 🧪 Running Tests

```bash
npm test
```

Runs test suites across both the frontend and backend. Make sure all systems are go before deploying.

---

## 🛰️ Contributing — Join the Mission

Found a bug? Have a feature idea? We welcome all co-pilots.

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/your-amazing-idea

# 3. Commit your changes
git commit -m "✨ Add your amazing feature"

# 4. Push to the branch
git push origin feature/your-amazing-idea

# 5. Open a Pull Request
```

Please write clear commit messages and test your changes before submitting. ✅

---

## 📡 Acknowledgements

- 🌍 [NASA Open APIs](https://api.nasa.gov/) — for making space accessible to all
- ⚛️ [Create React App](https://create-react-app.dev/) — React made simple
- 🍃 [Mongoose](https://mongoosejs.com/) — elegant MongoDB object modelling
- 🐳 [Docker](https://www.docker.com/) — because containers are the new rockets
- ☁️ [AWS EC2](https://aws.amazon.com/ec2/) — powering the production universe

---

## 📄 License

Licensed under the **ISC License**. Free to use, explore, and adapt.

---

<div align="center">

*Built with ❤️ and a deep curiosity for what lies beyond.*

**🌌 Ad Astra — To the Stars 🌌**

</div>
