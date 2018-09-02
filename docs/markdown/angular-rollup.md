---
path: "/blog/react-weather-app"
date: "2017-11-07"
title: "React weather app"
banner: "https://user-images.githubusercontent.com/8594076/36646017-c340bf96-1a97-11e8-99da-d4d5e48ba2e6.png"
---

![wd](https://user-images.githubusercontent.com/8594076/36646017-c340bf96-1a97-11e8-99da-d4d5e48ba2e6.png)

## WD Weather App 

Calculon is gonna kill us and it’s all everybody else’s fault! We’ll need to have a look inside you with this camera. I’m just glad my fat, ugly mama isn’t alive to see this day. Now, now. Perfectly symmetrical violence never solved anything. Morbo can’t understand his teleprompter because he forgot how you say that letter that’s shaped like a man wearing a hat. You’ve killed me! Oh, you’ve killed me!

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

> Don’t watch the clock; do what it does. Keep Going.
*Sam Levenson*

## Development server

Run `yarn start` or `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` or `npm run build` to build the project. The build artifacts will be stored in the `build` directory.

## Lint

Run `yarn lint` or `npm run lint` to check linting error in terminal .

## Test

Run `yarn test` or `npm run test` to run the test scripts (unit test and snapshot test) . Test scripts are written using [jest](https://github.com/facebook/jest) and [enzyme](https://github.com/airbnb/enzyme) .

## Style Guide

Code follows Airbnb's React style guide [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react)

## Hosting

It is hosted on Amazon EC2 instance with node + express web server . It is running at http://ec2-18-233-181-1.compute-1.amazonaws.com:9000/

## Current Features

* Get dynamic 5 days weather forecast based on the city selected
* Dropdown with auto search enabled
* Swipable UI when used on touch screens
* Graphical Report - Pictorial represenation with graph chart for temperature vs time and wind speed vs time

## Upcoming release

1.  USER INTERFACE

* Changing background image or color based on climate

2.  FUNCTIONALITY

* Add more filters for search based on country,city,geolocation .
* Adding google maps .
* Showing up weather report in multiple temparture format ex: celsius,fahrenheit .

```javascript

var fuck = 'u';

function whomToFuck(){
    return fuck;
}

```

```css
@import url(https://fonts.googleapis.com/css?family=Questrial);
@import url(https://fonts.googleapis.com/css?family=Arvo);

@font-face {
	src: url(https://lea.verou.me/logo.otf);
	font-family: 'LeaVerou';
}

/*
 Shared styles
 */

section h1,
#features li strong,
header h2,
footer p {
	font: 100% Rockwell, Arvo, serif;
}

```