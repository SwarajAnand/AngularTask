# Angular Signup and Login App by SWARAJ ANAND

[Hosted link 🔗](https://angular-task-phi.vercel.app/)

This is a simple Angular application that allows users to sign up and log in. The app uses NgRx for state management and mock data for organization names and IDs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Signup](#signup)
  - [Login](#login)
- [Mock Data](#mock-data)
- [Extra](#extra)

## Features 

- **Signup**: Users can register with their email or mobile number, along with other details like name, organization, designation, etc.
- **Login**: Registered users can log in using their credentials.
- **State Management**: Uses NgRx to manage global state across the application.
- **Form Validation**: Real-time validation for all forms with error handling.
- **Mock Data**: Uses predefined mock data for organization names and IDs.

## Installation 🔩

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SwarajAnand/AngularTask.git

   npm install

   ng serve OR npm start

## Signup

As for Signup create a new user with the below credentials and as this project dont holds any DB so the data get removed when refreshed as it is getting saved in a array [ ]

## Login

Demo users ->


    User 1:
        Email: john.doe@example.com
        Password: password123
        
    User 2:
        Email: jane.smith@example.com
        Password: securePass456

    User 3:
        Email: robert.brown@example.com
        Password: myPassword789

as you can login with these credentials and see the flow

## Mock Data

### As for now as this project use mock data you can only create new users with this organizationNames and organizationIds :

    Organization Names -> :
    1. Tech Corp
    2. Innovate Ltd
    3. Creative Solutions
    4. Marketing Gurus
    5. Finance Experts

    Organization IDs -> :
    1. D001
    2. D002
    3. D003
    4. D004
    5. D005

## Extra

To enhance user experience, the following features have been added:

1. <b>Password Toggler</b>: Users can toggle the visibility of their password while typing to ensure accuracy.

2. <b>Signup Delay</b>: A setTimeout of 1 **Second** is added on the signup page to simulate the time taken to store user data in a database, making the transition to the login page smoother.   

3. <b>Personalized Welcome</b>: When a valid user is detected on the homepage and redirected to the login page, their name is displayed, e.g., **"Welcome, Swaraj"** to provide a personalized experience.