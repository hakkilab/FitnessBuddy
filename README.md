# Fitness Buddy

## Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Schema](#Schema)

## Overview
### Description
A full stack MERN app for logging exercises.

To install and try out, do the following:
1. run 'git clone https://github.com/hakkilab/FitnessBuddy.git' to clone the project
2. run 'npm install' in the exercises-frontend and exercises-backend folders to install node_modules
3. Set a connection string for a MongoDB 'exercises' database in the exercises-backend/.env file parameter MONGODB_CONNECT_STRING
4. run 'npm start' in the exercises-frontend and exercises-backend folders
5. Go to http://localhost:8000/

## Video Walkthrough

Here's a walkthrough of all implemented functionality:

<img src='Fitness Buddy.gif' />

## Product Spec

### User Stories (Required and Optional)

- [x] User can navigate to the Home Page and Create Page from any page through a navigation bar.
- [x] User can see all logged exercises displayed in a table on the Home Page.
- [x] User can delete an exercise from the log by clicking a delete icon on the Home Page.
- [x] User can create an exercise on the Create Exercise Page by editing entry fields in a form and submitting the form.
- [x] User can click an edit icon on the Home Page to go to an Edit Exercise Page, where they can edit the exercise by altering pre-populated entry fields in a form and submitting the form.

## Schema 

### Models

#### Exercise

   | Property       | Type            | Description |
   | -------------- | --------------- | ----------- |
   | name           | String          | name of the exercise |
   | reps           | Number          | number of repetitions for the exercise |
   | weight         | Number          | weight used for the exercise |
   | unit           | String          | unit for the weight (lb or kg) |
   | date           | Date            | date the exercise was done on |

### Networking
   - Home Page
      - (Read/GET) Query all exercises
      - (Delete/DELETE) Delete an exercise
   - Create Exercise Page
      - (Create/POST) Create an exercise
   - Edit Exercise Page
      - (Update/PUT) Update an exercise
