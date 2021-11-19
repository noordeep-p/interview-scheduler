# Interview Scheduler

The Interview Scheduler app allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name and chooses an interviewer from the list provided. The user can add, edit ot delete an appointment and view the entire schedule of appointments on any day of the week.

The frontend of the scheduler is build with react with axios making requests to fetch data from an API, the goal of the project was to practice using React to create a single page applications and using Axios to make calls to the restful API over HTTP. And the project also allowed for gaining hands on experience with different development environments, including Storybook, Jest, and Webpack Dev Server.

## Setup

Install dependencies with `npm install`.

Dependencies include:

- axios: ^0.24.0
- classnames: ^2.2.6
- normalize.css: ^8.0.1
- react: ^16.9.0
- react-dom: ^16.9.0
- react-hooks-testing-library: ^0.6.0
- react-scripts: 3.0.0

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
