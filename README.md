# Simple Interest Calculator

## Project Overview

This is a simple web application developed using **HTML, CSS, and JavaScript** to calculate **Simple Interest**.

### Formula Used

```
SI = (P × R × N) / 100
```

Where:

- **P** = Principal Amount
- **R** = Interest Rate (%)
- **N** = Time (Years)

---

## Features

- User-friendly interface
- Calculates Simple Interest instantly
- Input validation
- Responsive design
- Easy to understand code
- Reset option (optional)

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

## Project Structure

```
SimpleInterestCalculator/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## How to Run the Project

### Method 1 (Recommended)

1. Download or clone the repository.

```
git clone https://github.com/HimanshuUyt/si-calculator.git
```

2. Open the project folder.

3. Double-click **index.html**

OR

Open using **VS Code** and use the **Live Server** extension.

The application will open in your browser.

---

## Git Commands Used

Initialize Repository

```
git init
```

Add Files

```
git add .
```

Commit

```
git commit -m "Initial Simple Interest Calculator"
```

Connect Remote Repository

```
git remote add origin https://github.com/HimanshUyt/si-calculator.git
```

Push Code

```
git push -u origin main
```

Clone Repository

```
git clone https://github.com/HimanshuUyt/si-calculator.git
```

Second Commit

```
git add .
git commit -m "Updated UI theme and added Reset button"
git push
```

---

# Jenkins Installation Using Docker

## Prerequisites

- Docker installed
- Internet connection
- Git installed

---

## Step 1: Pull Jenkins Docker Image

```
docker pull jenkins/jenkins:lts
```

---

## Step 2: Create Docker Volume

```
docker volume create jenkins_home
```

This stores Jenkins data permanently.

---

## Step 3: Run Jenkins Container

```
docker run -d
```

---

## Step 4: Verify Container

```
docker ps
```

You should see the Jenkins container running.

---

## Step 5: Open Jenkins

Open browser:

```
http://localhost:8080
```

---

## Step 6: Get Administrator Password

```
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

Copy the password.

Paste it into Jenkins.

---

## Step 7: Install Suggested Plugins

Click

```
Install Suggested Plugins
```

Wait until installation completes.

---

## Step 8: Create Admin User

Enter:

- Username
- Password
- Full Name
- Email

Click

```
Save and Continue
```

Jenkins is now ready.

---

# CI/CD Pipeline Setup in Jenkins

## Step 1: Create New Item

- Dashboard
- New Item
- Enter Project Name
- Select Pipeline
- Click OK

---

## Step 2: Connect GitHub Repository

Under Pipeline:

Repository URL

```
https://github.com/yourusername/simple-interest-calculator.git
```

Branch

```
main
```

---

## Step 3: Add Jenkinsfile

Create a file named

```
Jenkinsfile
```
Commit the Jenkinsfile.

```
git add .
git commit -m "Added Jenkins Pipeline"
git push
```

---

## Step 4: Configure Pipeline

In Jenkins

Pipeline

Definition

```
Pipeline script from SCM
```

SCM

```
Git
```

Repository URL

```
https://github.com/yourusername/simple-interest-calculator.git
```

Branch

```
main
```

Script Path

```
Jenkinsfile
```

Save.

---

## Step 5: Build the Project

Click

```
Build Now
```

Jenkins will execute:

- Clone repository
- Build
- Test
- Deploy

---

## Step 6: View Console Output

Click
