# react-jobly
A single page React frontend and a RESTful API backend with full CRUD capabilities to allow users to perform CRUD operations on the users, jobs, and companies routes depending on authorization level and respond back with JSON. Built using Node.js/Express/Postgres.

### Learnings
* Authentication and authorization through JWTs
* Recovering login status through data hydration
* Protect against SQL injection attacks by parameterizing database queries

_The backend code in this repository was provided by [Rithm School](https://www.rithmschool.com/). We built the backend as a separate exercise (code can be found [here](https://github.com/lynecha/express-jobly)). Pair programmed with [Andrew Kim](https://github.com/ghjkm319)_

## Getting Started

1. Clone this repo 
```
git clone https://github.com/lynecha/react-jobly.git
```
2. cd into the "backend" directory, install required packages, create and seed database, and start the server. (Make sure that you have postgreSQL installed)
```
cd backend
npm install
createdb jobly
psql jobly < data.sql
nodemon server.js 
```
This will start the server on port 3001

3. cd into the "frontend" directory, install required packages, then start the app
```
cd frontend
npm install
npm start
```

This will run your app on http://localhost:3000 


## App Information

### Routes
|Path | Component |
| :--- | :--- |
| / | Home  |
| /register  | Login  |
| /login  | Login  |
| /companies  | Companies  |
| /companies/:handle  | Company  |
| /jobs  | Jobs |
| /profile | Profile  |


### Component Architecture
```
![Alt](https://github.com/lynecha/react-jobly/blob/56bee4327a6daf85ec3fae4368d4e8782114a452/Jobly%20Component%20Tree.drawio.png)

App
├── Navigation
└─┬ Routes
  ├─┬ Companies
  │ ├── CompanyCard
  │ └── Search
  ├─┬ Company
  │ └── JobCard
  ├── Home
  ├─┬ Jobs
  │ │ └── JobCard
  │ └── Search
  ├─┬ Login
  │ └── Alert
  ├── PrivateRoute
  └─┬ Profile
    └── Alert
```
