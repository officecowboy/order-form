# Electronics Order Form

## Description

An electronics order form built with TypeScript and React.

Additional libraries used:
- [Material UI](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) (Object Schema Validation)
- [React Router](https://reactrouter.com/)

## Next Steps

Aiming for a 3-hour timeframe to completion, I prioritized the form's core functionality. At its current stage, the app successfully takes the user's inputs and validates them against the JSON schema. If there are any errors upon submission, the page returns the relevant error message(s). If correct, the page logs the submitted object to the console.

With additional time, I would make these necessary improvements the user experience:
1. After pressing "Submit", a "Review Order" screen returns the user's inputs for final review before purchasing. If necessary, the user can return to the "Order Form" screen and edit their inputs before final submission to the database. React Router is set up for this purpose, but I didn't have time to finish the follow-up screens.
2. After final "Submit", a confirmation screen acknowledges the order was placed.
3. Inline validation to correct user errors as they're filling out the form.

