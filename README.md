# Angular Signup and Login App

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

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SwarajAnand/AngularTask.git

   npm install

   ng serve OR npm start

## Signup

As for Signup create a new user with the below credentials and as this project dont holds any DB so the data get removed when refreshed as it is getting saved in a array [ ]

## Login

Demo users ->

    email: "john.doe@example.com",
    password: "password123",

    email: "jane.smith@example.com",
    password: "securePass456",

    email: "robert.brown@example.com",
    password: "myPassword789",

as you can login with these credentials and see the flow

## Mock Data

### As for now as this project use mock data you can only create new users with this organizationNames and organizationIds :

Mock organizationNames -> List are [  
  "Tech Corp",  
  "Innovate Ltd",  
  "Creative Solutions",  
  "Marketing Gurus",  
  "Finance Experts",  
];

Mock organizationIds -> List are = [  
  "D001",  
  "D002",  
  "D003",  
  "D004",  
  "D005",  
];

## Extra

I added that stuff to look more better

1. Added a password toggler for user to see password while writing
2. Added a setTimeout in signup page as for now that it take 1 second to redirect to the login page as we will store it in DB so it will take some time to make it feel like that 
3. When on homepage if we find a valid user and we are redirecting to login page so the name is also visible on that page like
--->>> Welcome, Swaraj 