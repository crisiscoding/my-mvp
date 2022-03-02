This is a personal inventory application.

Database schema - ![mvpDatabaseTablesCris.png](/mvpDatabaseTablesCris.png)

Setup
Dependencies
-Run yarn install in project directory. This will install server-related dependencies such as express.
-cd client and run yarn install. This will install client dependencies (React).
Database Prep
-Access the MySQL interface in your terminal by running mysql -u root -p
-Create a new database called whatever_you_want
Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:
DB_HOST=localhost
DB_USER=root
DB_NAME=whatever_you_want
DB_PASS=YOURPASSWORD

Run yarn run migrate in the project folder of this repository, in a new terminal window. This will create 2 tables called clothes, books and appliancces in your database.

Development
Run yarn start in project directory to start the Express server on port 5000
In another terminal, do cd client and run npm start to start the client in development mode with hot reloading in port 3001.

NEXT STEPS

Edit, delete and last washed option on the feature view.
Many more sorting options (season, closet section, price, color…)
Calculate time since purchase, last wash, last day worn maybe.
Make it pretty, more intuitive and less cumbersome to add items.
Continue with books and appliances.
Notify when an item is due to be washed, maybe connecting to a weather API
Create outfit suggestions connecting items to others that they look good with
Keep a list of items missing from the closet as shopping ideas
Develop a gamified “Decluttering Plan” with instructions and rewards
Same for “Wear your whole closet” or “Upgrade your stuff”
Whatever you want!!

_This is a student project that was created at
[CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
