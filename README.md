# TravelDeeply

> Code for the website of TravelDeeply.org, an organization geared towards connecting tourists with local organizations by providing volunteer opportunities. We offer a variety of unique activities that support the people and wildlife of popular travel destinations and expand the meaning of travel to include community service. Help pick up trash, cook at a soup kitchen, or build care packages and touch lives worldwide!

## Mission Statement

To inspire meaningful experiences by augmenting tour websites with opportunities to give back. Assisting charities get volunteers, donations, and awareness.

## Installation and Setup

1. Clone this GitHub repo by running the command `git clone https://github.com/amywang23/TravelDeeply` in terminal.

2. Make sure you have `node` and `npm` installed via [this tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm).

### Backend

1. Run the command `cd server`.

2. Install packages using the command `npm install`.

3. Follow the extra instructions [below](#mongodb-setup) for instructions to connect to the MongoDB database.

4. Run the code by running the command `node server.js`. You can run the code with auto-refresh using `nodemon server.js` or `npm run dev`. These commands should still be run in the `server` directory.

5. Test by going to <localhost:5000>

6. Test an API endpoint by going to <localhost:5000/api/events>. If this page displays the message `Event List`.

7. For more ways to test API endpoints, refer to [this link](https://hackernoon.com/how-to-easily-use-curl-for-http-requests-db3249c5d4e6).

8. OPTIONAL: Follow the extra instructions[below](#eslint) for instructions to run ESLint.

#### MongoDB Setup

1. Sign in to MongoDB [here](https://account.mongodb.com/account/login). Use the username and password under the MongoDB entry under the Tools page in our Notion.

2. Click **Connect** for the Travel-Deeply cluster.

3. Click **Connect using MongoDB Compass**.

4. Copy the connection string provided. (You can ignore all other instructions, unless you do want to download their UI which is unnecessary).

5. Go back to your code editor. Create a new `config.env` file under the `server` directory.

6. On the first line of `config.env`, paste `ATLAS_URI=<connection string>`. Replace `<connection string>` with the string you copied.

7. Change the `<password>` in the connection string you just pasted to our actual user password. Use the pasword under the MongoDB Database Access entry under the Tools page in our Notion.

8. On the second line of the `config.env`, add the following line: `PORT=5000`.

9. Make sure to save all changes.

#### ESLint

This will help identify potential runtime and syntax errors. This will also enforce style guides, such as single quotes and using semicolons. You have two options:

* Run the linter using the command `eslint *`.

* Download the ESLint VS Code extension [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). You should be able to configure it to automatically scan for errors.
