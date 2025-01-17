## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

# Auth
- comes for free

# Employee List Page
- shows a list of all employee's profiles with the user email and their employee rating

# HTML SETUP
- a div to render and append a list of employee profile boxes (each box has a link to the employee's detail page)

# EVENT
- on load, fetch all the employees, render and append

## Employee Profile Page
- show the email address, employee rating, and messages for the user
- allow any logged in user to leave a message
- allow any logged in user to up-vote or down-vote this employee

## HTML SETUP
- link/anchor tag to get back to employee list page
- form to add a message
- buttons to up or down vote employee
- div to render and append messages to
- div to display the user's updated rating

## EVENT LISTENER
- on load, fetch the employee profile, render and append the messages and display employee rating
- on submit, create a new message, refetch, render, and append
- on click, increase/decrease employee rating and then refetch, render, and append

## FUNCTIONS
1.) fetchAndDisplayFunction
    - fetch user data
    - clear out messages from the DOM
    - render and append updated messages
    - update the employee rating DOM element
