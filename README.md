
# Flipcart E-commerce website Clone

It is Flipcart E-commerce website clone build with Reactjs, Tailwind CSS, Material ui and Nodejs. 

Deploy using Docker and Kubernetes on AWS EC2.

## Feature
- Login/Signup User Account
- Update Profile/Password User Account
- Reset Password 
- Cart Add/Remove/Update Items
- Save For Later
- Wishlist Add/Remove Items
- Products Pagination (Default 10 Products Per Page)
- Product Search
- Product Filters Based on Category/Ratings/Price Range
- Order Details of All Ordered Item
- Confirmation after order placed
- Admin access
## Language & Tool used
<div class="frontend">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="html5" width="80" height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="css3" width="80" height="80" />
    <img src="https://itzone.com.vn/wp-content/uploads/2020/01/aec9657d-51c9-4d60-acc3-b784680ff410.png"
        alt="tailwindcss" width="80" height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="javascript" width="80" height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="react" width="80" height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"
        width="80" height="80" />
    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Smbj_VLH7JRp9GhLaKyiUQ.png" alt="redux"
        width="180" height="80" />
</div>
<div class="backend">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs" width="120" height="120" />
    <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png"
        alt="express" width="180" height="60" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        alt="mongodb" width="80" height="100" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass"
        width="100" height="80" />
</div>
<div class="deployment">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx"
        width="80" height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
        alt="docker" width="80" height="80" />
    <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="80"
        height="80" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        alt="aws" width="100" height="80" />
</div>

## Image Management

[Cloudinary](https://cloudinary.com/)
## Payment GateWay

![paytm](https://img.shields.io/badge/Paytm-002970?style=for-the-badge&logo=paytm&logoColor=00BAF2)

## Environment Variables

To run this project, you will need to add the following environment variables to your following file

| ENV Variables section | File |
| :--- | :---: |
| AWS EBS Volume ID | server-app-config.yml |
| Paytm Credentials | server-app-secret.yml |
| JWT secret and expiry | server-app-secret.yml |
| Cloudinary Credentials | server-app-secret.yml |
| MongoDB| server-db-secret.yml |
| SERVER_URL | Dockerfile in frontend directory |

**AWS EBS Volume ID**

`AWS_EBS_VOLUME_ID`

**Paytm Credentials**

`PAYTM_MID`
`PAYTM_MERCHANT_KEY`
`PAYTM_WEBSITE`
`PAYTM_CHANNEL_ID`
`PAYTM_INDUSTRY_TYPE`
`PAYTM_CUST_ID`

**JWT secret and expiry**

`JWT_SECRET`
`JWT_EXPIRE`

**Cloudinary Credentials**

`CLOUDINARY_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`

**MongoDB**

`MONGO_INITDB_ROOT_USERNAME`
`MONGO_INITDB_ROOT_PASSWORD`

**Client side**

`SERVER_URL= #Add your server url after backend image build`

## Installation

:warning:**Note :** &nbsp; Setup git, docker, minikube, kubernetes on AWS EC2, view my ```install.txt``` first to start with this project.

Clone repository

```bash
  git clone https://github.com/KPRAPHULL/flipcart-e-commerce-mern-docker-kubernetes.git
```
Go to your project directory
```bash
  cd "flipcart-e-commerce-mern-docker-kubernetes"
```
:warning:**Note :-** &nbsp;_First set environment variable, see above "Environment Variables" section_


Go to server directory
```bash
  cd ../server
```

Now setup database

```bash
  kubectl apply -f server-db-persist-volume.yml
  kubectl apply -f server-db-persist-volume-claim.yml
  kubectl apply -f server-db-secret.yml
  kubectl apply -f server-db-deploy.yml
  kubectl apply -f server-db-service.yml
```

Build Image for backend

```bash
  docker build -t flipcart-server-app-image .
```
Now setup backend server

```bash
  kubectl apply -f server-app-secret.yml
  kubectl apply -f server-app-config.yml
  kubectl apply -f server-app-deploy.yml
  kubectl apply -f server-app-service.yml
```
Copy image of Cluster-ip with port of backend
```bash
  kubectl get service/flipcart-server-app
```
**ex: 10.10.12.14:5000**

Go to cliend directory
```bash
  cd ../client
```

Build image for frontend

Now setup frontend

```bash
  docker build -t flipcart-client-app-image .
```

```bash
  kubectl apply -f client-app-deploy.yml
  kubectl apply -f client-app-service.yml
```

Now copy aws ec2 IPv4 address and paste port
ex: 3.13.11.65:32013

## Screenshots

![App Screenshot1](https://github.com/KPRAPHULL/flipcart-e-commerce-mern-docker-kubernetes/blob/master/screenshots/Screenshot1.png)

![App Screenshot2](https://github.com/KPRAPHULL/flipcart-e-commerce-mern-docker-kubernetes/blob/master/screenshots/Screenshot2.png)

![App Screenshot3](https://github.com/KPRAPHULL/flipcart-e-commerce-mern-docker-kubernetes/blob/master/screenshots/Screenshot3.png)
## 🚀 About Me
I'm a PRAPHULL KUMAR.

Skilled in full stack web development(React Js, Next Js , Node Js), Java, DSA, Docker, Kubernetes


## 🔗 Connect with me

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/praphullsoftdev)
