Day Planner Overview

This application allows the user to log daily work tasks in an online scheduler 

The hours listed are typical working hours of 9 am to 5 pm

Each text box allows the user to type in their specific tasks at each hour of the day and then save it with the "save button" provided on the right of the text box

Text will remain after refresh if saved

-----------------------------

Psuedo Code

The application is comprised of an HTML, CSS and Javascript file

9 row time blocks in the html file give the page a majority of it's structure 

Date at the top is provided by moment()

The timeUpdate function provides the correct colors on the time blocks 
relative to the current time of day

Loops and handleClick function towards the bottom of the Javascript page store the text content in local storage and keep text on page after refresh 

