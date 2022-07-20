# TravelDeeply

Code for the website of TravelDeeply.org

## Installation and Setup

1. Clone this GitHub repo by running the command `git clone https://github.com/amywang23/TravelDeeply` in terminal.

2. Make sure you have `node` and `npm` installed via [this tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm).

### Backend

1. Run the command `cd server`.

2. Install packages using the command `npm install`.

3. Follow the extra instructions [below](#mongodb-setup) for instructions to connect to the MongoDB database.

4. Run the code by running the command `node server.js`. You can run the code with auto-refresh using `nodemon server.js` or `npm run dev`. These commands should still be run in the `server` directory.

5. Test by going to <localhost:5000> and test GET request by going to localhost:5000/api plus a route found in ./routes/index.js

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
