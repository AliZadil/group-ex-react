# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

Start editing the src/app.jsx file.

Add a new component called Students.jsx, add it to the routes in App.jsx, as the route "/students". Add a link to navigate to that component.
Create a StudentDetails form in Students.jsx, that has three input tags for name, age and year. Give a name to each input tag, which we will use together with the form ref.
Attach a ref to this form.
Create a button called "Add Student", that will add all these details from the inputs into a list of students, that's a state variable.
Use .map() to display the list of students on the screen, with their properites like name, age, etc, in p or div tags.
Add a button to Delete a student from the list of students. Use the student's "index" in order to delete them from the list.