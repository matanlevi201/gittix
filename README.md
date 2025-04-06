# GitTix

> A ticketing platform that allows users to securely create and purchase tickets using Stripe integration. The system is architected using a distributed microservices approach, following industry best practices. It features comprehensive backend testing and automated test workflows via GitHub Actions.
> 

![set](https://github.com/user-attachments/assets/bc2253a8-a44e-46ed-b039-a62dd3022938)

### 🚀 Tech Stack

- **React.js** – Frontend framework for building fast, modern web apps
- **Express** – Lightweight Node.js framework for building microservices and REST APIs
- **NATS Streaming Server** – Message broker for reliable, event-driven communication between services
- **MongoDB** – NoSQL database for storing ticket, order, and user data
- **Jest** – JavaScript testing framework for unit and integration tests across services
- **Docker** – Containerization platform to package and isolate each microservice
- **Skaffold** – Local Kubernetes development tool for continuous deployment and workflow automation
- **Kubernetes (K8s)** – Container orchestration system to manage, scale, and deploy microservices in a distributed environment
  
# Hosts Tweak

1. Open a text editor in administration mode.
2. Open the file: `C:\Windows\System32\drivers\etc\hosts`.
3. Add the line: `127.0.0.1 ingress-srv-host-name`.
4. Save and close.

# Install Scoop

1. Open PowerShell in administration mode.
2. Go to [https://scoop.sh/](https://scoop.sh/).
3. Run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
4. Run:
   ```powershell
   Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
   ```

# Install Skaffold

1. Open Bash and type:
   ```bash
   nano ~/.bashrc
   ```
2. Add this line:
   ```bash
   export PATH=$PATH:/c/Users/<your-username>/scoop/shims
   ```
3. Save the file.
4. Reload the shell by running:
   ```bash
   source ~/.bashrc
   ```
5. Define `skaffold.yaml`.

# Run Ingress Controller

1. Go to [Ingress-NGINX Quick Start](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start).
2. Find the following command:
   ```bash
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.0-beta.0/deploy/static/provider/cloud/deploy.yaml
   ```
3. Run it.
4. Define an `ingress-srv.yaml`.

# Start

1. Make sure Docker and Kubernetes are up and running on your system.
2. Run:
   - For detached mode:
     ```bash
     skaffold run
     ```
   - For watch mode:
     ```bash
     skaffold dev
     ```

# Splitting Your Git Repo While Maintaining Commit History

Follow the guide here: [Splitting Your Git Repo While Maintaining Commit History](https://amandawalkerbrubaker.medium.com/splitting-your-git-repo-while-maintaining-commit-history-35b9f4597514)

kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=<stripe_secret_key>
kubectl create secret generic pub-stripe-secret --from-literal STRIPE_KEY=<stripe_secret_key>
kubectl create secret generic jwt-secret --from-literal JWT_KEY=<generate_jwt_key>
