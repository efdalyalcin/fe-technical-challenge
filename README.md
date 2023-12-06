Efdal YALCIN, notes about the task:

- The app initially didn't have an entry point, and there were no instructions so I created it myself.

- I added comment lines through out the app to explain my thought process

- For the disabled and error states I created custom hooks since I would need to use them in any other component.

- I needed the error state hook because I handled wrong inputs with a regex so creating an error is not possible. I thought it is a more user friendly way.

- For translation, there are many libraries but I didn't want to add one, I simply added translation files and used them for this small app. However it would be impossible to maintain if the app got bigger or any other language is added.

And I am very sorry about my German, it is just google translate.

--- somehow I couldn't deploy the page so it will need to be run locally, sorry again ---

To use this project locally, follow these steps:
1. Clone the repository to your local machine using Git:
- `git clone https://github.com/efdalyalcin/fe-technical-challenge.git`

2. Navigate to the project's root directory:
- `cd fe-technical-challenge`

3. Install the project dependencies using npm:
- `npm i`

4. Start the development server:
- `npm start`

