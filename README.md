# Daily Work Day Scheduler
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Demo](#demo)
* [Code Example](#code-example)

## General info
This project is simple daily schedule application. Special features include the color coding of hours in the day that have passed, the current hour, and hours of the day in the future. Another important feature is the use of local storage. Even if the user refreshes the page, the tasks they saved will still be displayed. This app is great for keping track of daily events and tasks, and would aid the user in staying on track.

## Technologies
- Bootstrap 4
- Moment.js
- jQuery

## Demo
![demo of app](05-third-party-apis-homework-demo.gif)

## Code Example
```
//on click for save button
    $(".saveBtn").on("click", function (e) {
        var userInput = $(this).parent().parent().find(".description").val();
        console.log(userInput);
        //setting local storage
        var key = $(this).parent().parent().attr("id")
        e.preventDefault();
        localStorage.setItem(key, userInput)
    });
 ```
 
 ## Authors and Acknowledgement
 Isha Khosla is the main author. However they recieved help and guidance from tutor Simmon Rennocks. 

### Link to the App
https://ishakhosla131.github.io/dayPlanner/