# Electronics Order Form

## Description

An electronics order form built with React and Typescript.

Libraries Used:
- [Material UI](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup Object Schema Validation](https://github.com/jquense/yup)
- [React Router](https://reactrouter.com/)

I chose the above tech stack 

## Next Steps

Aiming for a 3-hour timeframe to completion, I prioritized the form's core functionality. At its current stage, the app successfully takes the user's inputs and validates them against the JSON schema. If there are any errors upon submission, the page returns the relevant error message(s). If correct, the page logs the submitted object to the console.

With additional time, I would make the following improvements to the user experience:
1. After pressing "Submit", a "Review Order" screen returns the user's inputs for final review for purchasing. If necessary, the user and go back and edit their form before final submission to the database. React Router is set up for this purpose, but I didn't have time to finish the follow-up screens.
2. After final "Submit", a confirmation screen acknowledges the order was placed.
3. Inline validation to correct user errors as they're filling out the form.
4. Submission button only clickable when all fields have been filled in.


