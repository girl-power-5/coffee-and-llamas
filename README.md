## Project Name:  IMOK 

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
 
I AM OK!   IMOK was created with safety of in mind.  Late evening dates, travelling alone, out for a hike, or just walking to school can make a person vulnerable and unsafe. Texting can be time consuming especially if there is an emergency. Individuals do not always want to 'broadcast' their location on social media.   Enter I am OK or IMOK for short.    IMOK was designed for a person to easily click a button to send a message to their squad.     IMOK allows a user to set events on their page which can be shared with their IMOK safety squad. gives a user the ability to message their IMOK squad the location when they go out.   The user can send an SMS message to let members of their "safety squad" know how they are doing. 

## WireFrame: https://whimsical.com/project3-3nSuRaov8j827aorzfM6FG


## Installation
To install and run locally from Git Hub repository, go to the repository: https://github.com/girl-power-5/coffee-and-llamas
Click CODE box, select SSH and copy the repository to your clipboard.
In your command-line navigate to the folder you want to hold the repository.
Once there type 'git clone' and paste the repository information into the line.
Once completed open the code in VS by typing the command code .
This will take you to VS Code and you will be in the repository on your local machine.

Once cloned, do an instal to install dependencies used:
 "@material-ui/core": "^4.11.3",
    "@material-ui/icons": "^4.11.2",
    "axios": "^0.21.1",
    "bcryptjs": "^2.4.3",
    "bootswatch": "^4.6.0",
    "connect-mongo": "^4.4.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "if-env": "^1.0.4",
    "mongoose": "^5.11.19",
    "nodemon": "^2.0.7",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "react-datetime-picker": "^3.2.0",
    "twilio": "^3.58.0"

client dependencies: 
    "@date-io/date-fns": "^1.3.13",
    "@fortawesome/react-fontawesome": "^0.1.14",
    "@material-ui/core": "^4.11.3",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/pickers": "^3.3.10",
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.8.1",
    "@types/date-fns": "^2.6.0",
    "@y0c/react-datepicker": "^1.0.4",
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "bootswatch": "^4.6.0",
    "date-fns": "^2.19.0",
    "google-maps-react": "^2.0.6",
    "react": "^17.0.1",
    "react-bootstrap": "^1.5.1",
    "react-datetime-picker": "^3.2.0",
    "react-dom": "^17.0.1",
    "react-google-places-autocomplete": "^3.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^4.0.3",
    "web-vitals": "^1.1.0"



To access from a browser: https://imok-squad.herokuapp.com/

## React
Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Usage 
User is presented with a homescreen when they navigate to  https://imok-squad.herokuapp.com/



User can Login or create a new account:
![Screen Shot 2021-03-21 at 9 17 41 PM](https://user-images.githubusercontent.com/67554339/111932196-ee1e1180-8a8a-11eb-8092-5dca657d7871.png)


Once logged in the user is presented with a menu and their events and squad information:

![Screen Shot 2021-03-21 at 9 02 55 PM](https://user-images.githubusercontent.com/67554339/111931474-47854100-8a89-11eb-927f-45d5876f2f99.png)


The user can create a new event

![Screen Shot 2021-03-21 at 9 07 56 PM](https://user-images.githubusercontent.com/67554339/111931634-97640800-8a89-11eb-8c11-cbaccac800ad.png)

The day of an event is displayed along with alert buttons: 
![Screen Shot 2021-03-21 at 9 03 28 PM](https://user-images.githubusercontent.com/67554339/111931667-b2367c80-8a89-11eb-8713-7dfe7e7b2594.png)

When an alert message is selected the user will receive a message confirming the alert has been sent:
![Screen Shot 2021-03-21 at 9 04 32 PM](https://user-images.githubusercontent.com/67554339/111931964-61735380-8a8a-11eb-9d31-47f4070b9200.png)

Each button will send an SMS message to each member of the IMOK Safety Squad (max group of the squad is 5):

<img width="367" alt="Screen Shot 2021-03-21 at 9 11 57 PM" src="https://user-images.githubusercontent.com/67554339/111931821-18230400-8a8a-11eb-9aed-fff9419ce683.png">

## License:
MIT
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS  IN THE SOFTWARE.


## Resources and Credits: 
Project Name of IMOK the genius of Ryan Duncan 
Twilio Consultant Ken Kulinski
WireFrame done with Whimsical: 
Project managmement: Notion
Presentation: Canva 
All the Llamas for their moral support 

GitHub Repos Reference: 
Repo to learn how to implement passport: https://github.com/dikuw/mern-passport
Repo to learn the ins and outs of connect-mongo: https://github.com/jdesboeufs/connect-mongo#readme
Repo to guide us on server file: https://github.com/antoniojgage/project-setup

Articles used to troubleshoot and resolve issues:
[https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react](https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react)

[https://stackoverflow.com/questions/46019149/many-to-many-with-mongoose](https://stackoverflow.com/questions/46019149/many-to-many-with-mongoose) 

[https://bootswatch.com/](https://bootswatch.com/)

[https://www.itsolutionstuff.com/post/react-phone-number-validation-exampleexample.html](https://www.itsolutionstuff.com/post/react-phone-number-validation-exampleexample.html)

[https://codeseven.github.io/toastr/demo.html](https://codeseven.github.io/toastr/demo.html)


## Suggestions
We are always looking to learn and improve our applications, please feel free to reach out with suggestions or ideas for improvement in future versions. 
amber.park@northwestern.edu
claudiaalpert@gmail.com
emilyblair96@gmail.com
jen.doyle5254@gmail.com
melissaward953@gmail.com

## Questions:
For more information on this project or others we have made, [here is a link](https://github.com/girl-power-5) to our organization on GitHub.

Girl-Power 5 Members:  
[Claudia Alpert](https://github.com/Calpert)  
[Emily Blair](https://github.com/emblair96)  
[Melissa Ward](https://github.com/mw18)  
[Amber Chiodini](https://github.com/amberchiodini)  
[Jen Doyle](https://github.com/Jdoyle5254)