# IMOK

## Table of Contents:

1. [Description](#Description)
2. [Installation](#Installation)
3. [React](#React)
4. [Usage](#Usage)
5. [Licence](#Licence)
6. [Resources & Credits](#Credits)
7. [Suggestions](#Suggestions)
8. [Questions](#Questions)

## Description

I AM OK! IMOK was created with safety of in mind. Late evening dates, travelling alone, out for a hike, or just walking to school can make a person vulnerable and unsafe. Texting can be time consuming especially if there is an emergency. Individuals do not always want to 'broadcast' their location on social media. Enter I am OK or IMOK for short. IMOK was designed for a person to easily click a button to send a message to their squad. IMOK allows a user to set events on their page which can be shared with their IMOK safety squad. gives a user the ability to message their IMOK squad the location when they go out. The user can send an SMS message to let members of their "safety squad" know how they are doing.

## Technologies

### Frontend

- React
- JavaScript
- HTML
- CSS
- Material UI
- Bootstrap
- Bootswatch
- Axios
- React Datetime Picker
- Whimsical (wireframing tool)

### Backend

- Node
- Express
- MongoDB
- Mongoose
- Passport
- Bcryptjs
- Dotenv

### APIs

- Google Maps
- Twilio SMS

## Installation

Clone and/or fork the repo, (see how [here](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)) then install server-side dependencies at the root of the folder and client-side dependencies in the client directory by running the following in your command line: `npm i`.

To run local development, you will need to ensure you have MongoDB installed and able to use as your database, as well as Node for the backend. You will also need to create a .env file with the necessary credentials to use the Twilio and Google Maps API (see the .env.example file). You do not need to include the MONGODB_URI unless you are deploying using MongoDB Atlas.

Once the above items are completed, you can run the command `node server` at the root of your directory to start the backend server; then you can run `npm start` in the client directory to start the frontend server. Visit http://localhost:3000 in your browser to see the application.

## Links

- [Personal GitHub Repo](https://github.com/emblair96/coffee-and-llamas)
- [Group GitHub Repo](https://github.com/girl-power-5/coffee-and-llamas)
- [Deployed Application](https://imok-squad.herokuapp.com/)

## Usage

### Landing Page

<img src="https://user-images.githubusercontent.com/67554339/111932196-ee1e1180-8a8a-11eb-8092-5dca657d7871.png" alt="Application Home Page" width="400"/>

### User Dashboard, including events & Safety Squad information

<img src="https://user-images.githubusercontent.com/67554339/111931474-47854100-8a89-11eb-927f-45d5876f2f99.png" alt="User Dashboard" width="400"/>

### Interface to create a new event

<img src="https://user-images.githubusercontent.com/67554339/111931634-97640800-8a89-11eb-8c11-cbaccac800ad.png" alt="Create New Event Page" width="400"/>

### Example Event Display

<img src="https://user-images.githubusercontent.com/67554339/111931667-b2367c80-8a89-11eb-8713-7dfe7e7b2594.png" alt="Event Page with Alert Buttons" width="400"/>

### User receives confirmation when an alert is sent to their safety squad

<img src="https://user-images.githubusercontent.com/67554339/111931964-61735380-8a8a-11eb-9d31-47f4070b9200.png" alt="Event Page with Alert Buttons" width="400"/>

### Each button will send an SMS message to each member of the IMOK Safety Squad (max group of the squad is 5)

<img width="200" alt="Screen Shot 2021-03-21 at 9 11 57 PM" src="https://user-images.githubusercontent.com/67554339/111931821-18230400-8a8a-11eb-9aed-fff9419ce683.png">

## License:

Copyright &copy; 2020 Amber Chiodini, Claudia Alpert, Emily Blair, Jen Doyle, & Melissa Ward. Licensed under the MIT license.

## Resources and Credits

- Project Name of IMOK the genius of Ryan Duncan
- Thanks to our Twilio consultant, Ken Kulinski
- [Passport reference](https://github.com/dikuw/mern-passport)
- [Connect-mongo reference](https://github.com/jdesboeufs/connect-mongo#readme)
- [Server file set-up reference](https://github.com/antoniojgage/project-setup)
- [Implementing many-to-many wiht Mongoose](https://stackoverflow.com/questions/46019149/many-to-many-with-mongoose)
- [Using onChange with multiple inputs with React](https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react)
- [toastr demo](https://codeseven.github.io/toastr/demo.html)

## Suggestions

We are always looking to learn and improve our applications, please feel free to reach out with suggestions or ideas for improvement in future versions.

- amber.park@northwestern.edu
- claudiaalpert@gmail.com
- emilyblair96@gmail.com
- jen.doyle5254@gmail.com
- melissaward953@gmail.com

## Questions:

For more information on this project or others we have made, [here is a link](https://github.com/girl-power-5) to our organization on GitHub.

Girl-Power 5 Members:  
[Claudia Alpert](https://github.com/Calpert)  
[Emily Blair](https://github.com/emblair96)  
[Melissa Ward](https://github.com/mw18)  
[Amber Chiodini](https://github.com/amberchiodini)  
[Jen Doyle](https://github.com/Jdoyle5254)
