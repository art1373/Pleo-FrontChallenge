[![CircleCI](https://circleci.com/gh/art1373/Pleo-FrontChallenge.svg)](https://https://github.com/art1373?tab=repositories)
[![Netlify Status](https://api.netlify.com/api/v1/badges/df372e22-32cc-4c68-afa2-d9a3aac648b0/deploy-status)](https://app.netlify.com/sites/pleo-alireza/deploys)


This is my version of Pleo Front End Challange.
firstly clone and run api https://github.com/art1373/pleo-api
## Brief Description

I used Reactjs and got use of <=> 16 version features Hooks. also used Sass as a css preprocessor and Context Api as my state manager.
the project is fully responsive and I add a little sidebar for visual consistency.<br /> I also designed and implemented the Card of the expenses myself.
The user can see all listing expenses, can filter them via search and different Currencies
can Add Comment and Upload Receipts as well.I used netlify CD for deployment (the api should run locally though) and Buddy Pipeline to run the CI/CD Tests as well. I also deployed to Circle CI.
## How long did it take?
  it took me About a Week with my daytime dev job. it could have been shorter but I did my best :).

### Which part was the hardest to implement? 
the hardest part was how to setup the architecture of the project. what kind of desing pattern I would choose? (I went with feature first).<br />
the update of comments and communication between context store and the components was a hard part too.
## Packages I used
    "axios" : for api calls.
    "moment": "^2.24.0", to convert the date to my desired format
    "node-sass": "^4.13.1", preprocessor
    "react-burger-menu": "^2.6.13", the sidebar
    "react-icons": "^3.9.0", for the refresh icon
    "react-loadingg": "^1.7.1", the box loading you see
    "react-spring": "^8.0.27", for the animations
    "sweetalert2": "^9.7.1" for success or error messages
    jest and enzyme : for testing

### What functionalities are you most proud of?
The way I set modal context for comments. the Design of the front end. the header reducer of different currencies total amount.<br />
the animation of the search bar was really fun too.
## What Its Lack 
It lacks localization and typescript in the project. 

## What I think I need improvment after I done this project
I think I should have done better on filtering implementation. I could have setup a stand alone context for my filtering and a clean reducer. and ofcourse my all time weaknes "Wrting good tests".
