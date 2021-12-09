# Interview Scheduler

The Interview Scheduler app allows users to book technical interviews between students and mentors. Interview appointments can be booked 12 PM and 5 PM, Monday to Friday, when creating a new appointment the user can enter their name and select an preferred interviewer from the list of available interviewers. The user can add new appointments or edit/ delete existing ones and view the entire schedule of appointments on any day of the week.

The frontend of the scheduler is build with react using axios requests to fetch data from an API, the goal of the project was to practice using React to create single page applications and using Axios to make restful API calls over HTTP. And the project also allowed for gaining hands on experience with different development environments, including Storybook, Jest, and Webpack Dev Server.

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

## Screenshots

!["App Landing Page"](https://raw.githubusercontent.com/noordeep-p/interview-scheduler/master/docs/Homepage.png)
!["Add an Appointment"](https://raw.githubusercontent.com/noordeep-p/interview-scheduler/master/docs/Add-appt.png)
!["Edit an Appointment"](https://raw.githubusercontent.com/noordeep-p/interview-scheduler/master/docs/Edit-appt.png)
!["Save Changes"](https://raw.githubusercontent.com/noordeep-p/interview-scheduler/master/docs/Save-appt.png)

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
