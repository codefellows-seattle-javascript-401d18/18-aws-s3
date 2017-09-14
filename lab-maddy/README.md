### Documentation

#### Table of Contents:

* [What this project does](#whatthisprojectdoes)
* [Learning Objectives](#learningobjectives)
* [Steps for me to complete](#stepsforme)
* [How another dev could 'get started' with my api on their own](#devsteps)
* [Mongo database steps](#mongosteps)
* [Packages and commands to remember](#packages)
* [Any resources that helped me complete this project](#resources)
* [Collaborators](#collaborators)

### <a name="whatthisprojectdoes"></a>What this project does:
The final goal for this project is to create a mock version of instagram. We're calling it CF gram. CF gram is an app that can let users sign up, sign in, create galleries, and then add images that belong to those galleries. We will be using Amazon Web Services (AWS) as our database to store these images.

Today's lab assumes the user has a token and we can now make galleries for these users. And publish them using an AWS service called S3; we will incorporate AWS in tomorrow's lab.

We are now using Bearer to allow the user to make updates/changes to their login information.

### <a name="learningobjectives"></a>Learning Objectives:
* We will be able to create bearer authentication middleware.
* We will be able to utilize their bearer authentication middleware in their route structures.
* We will be able to test against authenticated routes.

### <a name="stepsforme"></a>Steps for me to complete:
* create a bearer auth middleware module (feel free to use the one from lecture as a reference point)
--> DONE - bearer-auth-middleware.js
* create a new resource that has at least three properties
--> DONE- gallery.js
  * this resource must have a property of `userId` that references the `_id` of the user that created the resource
  --> DONE - within gallery.js
  ```
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' }
  ```
  * the `userId` property can only be set from an `_id` found using your bearer auth middleware module
  -->
* as always, use the **npm** `debug` module to log function calls that are used within your application
-->
* using the express `Router`, create routes for doing **RESTFUL CRUD** operations against your resource
--> DONE - within route-gallery.js


### <a name="devsteps"></a>How another dev could 'get started' with my api on their own:
  * How do you clone this project?
      1. First click on the Fork button in the upper right hand corner to make a copy of my repository.
      2. That will automatically take you to your github. Then click on the green 'clone or download' button to copy the URL to your machines clipboard.
      3. In terminal navigate to wherever you want this clone to live, type 'git clone <this is where you paste the URL you just copied>', you should see a 'master' branch appear.
      4. Then type 'git checkout -b <branch name of your choosing> to create a fresh branch to work from.
  * How do you start using this project?
      1. You will need to have NodeJS installed on your machine.
      2. You will need to install httpie in one terminal window to test HTTP requests.
      3. Then start type nodemon or node server.js in a separate terminal window to get your server running.
      4. You will need to npm i to install node modules.
      5. But you do not want to commit theses large module files, so you must create an `.eslintignore` file that includes nodemodules.
      It looks like this within the file:
      ```
      **/node_modules/*
      ```

### <a name="mongosteps"></a>Mongo database steps:
1. Create db folder within data folder.

2. Upper right window (within lab-maddy folder)
```
mongod --dbpath ./data/db
```
3. Lower right window (within lab-maddy folder)
```
mongo
```
4. Upper left side terminal window (within lab-maddy folder)
```
npm run start:watch
```
5. Lower left window - POST, GET, PUT, DELETE requests

#### To see what's in your database:
````
show dbs
````
#### Open a database:
```
use <db_name>
```
#### Show collections:
```
show collections
```
#### To open the collection you're working with:
```
use cf-gram-dev
```
#### To delete the data in the collection:
```
drop cf-gram-dev
```

### To test POST, GET, PUT and DELETE an object on the server, use these requests in terminal (we're able to do this with the http client superagent):


### Example POST(sign up) request in Postman:
```
localhost:4000/api/signup
```

### scott Example Requests
* **POST /api/toy** (requires bearer auth token)
`https://localhost:8080/api/toy`
```
js
<!-- Example Body -->
{
  "name": "barney,
  "desc": "purple dino"
}
```
### Example GET(sign in) request in Postman:
```
localhost:4000/api/signin
```

### Example PUT request:


### Example DELETE request:


### <a name="packages"></a>Packages and commands to remember:
#### New packages (introduced for this project):
- npm install jsonwebtoken (Tor jwt (JSON web tokens); this is what makes it possible for us to create user tokens)-
- npm i bcrypt (For hashing user passwords) -
- npm install dotenv (This is for ) -

#### For Mongo:
- npm install mongodb into your project directory (To install Mongo) -
- mongod (To start the MongoDB process)
- mongo (To start the MongoDB shell-- )

#### For Mongoose:
- npm install mongoose (To install mongoose) -

#### General:
  - In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js",
  - npm install express -
  - npm i or npm install (For node modules) -

###### HTTP requests:
  - node server.js or just nodemon (to start a command line server) -
  - rs (restart, if needed)
  - ^C (control-C to stop node server)
  - npm install httpie (A command line HTTP client, to be able to test making http requests. An alternative is postman.)
  - npm install superagent (To be able to make http requests) -
  - npm install uuid (For creating unique user ids) -
  - npm install -D jest (To be able to run tests) -
    - npm test (To actually run the jest test)

###### TESTS:
  - run run start:watch (This option won't tell what is wrong with your code) -
  - npm run start:debug - (Then attempt a POST and this option will tell you where you are wrong)
  - npm run debugger (Not sure what makes this one different or special yet...)-

###### Not needed for every project:
  - npm install bluebird (sets this as a dependency in package.json. Bluebird is a promise library) -
  - npm install faker (this gives provides us with fake data for testing things like user info- names, addresses, phone numbers, etc) - DONE

#### General notes/changes made from previous projects:
- Created an index.js and set it as the start point in package.json.
- Created a .env file with the following:
  - Note: The angle brackets are just placeholders and should not be included in your code.

```
MONGODB_URI='mongodb://localhost/<name of your database>'
APP_SECRET='<a secret word>'
PORT=<a port number>
```

- In package.json, within scripts add the '--runInBand' to the 'test: jest.' This will make sure all tests run sequentially.
```
"test": "jest --runInBand",
```
- Don't push an AWS key to github!!!
- I copied my work from lab 16 into this lab.
- Tests from lab 14 will help with the test for this lab.- gavin
- Create an AWS account
- Created a `.env` & `.test.env` files
- Isaiah recommended adding this as an additional test command in package.json-    
```
 "testtwo": "jest -i",
 ```
 - Signed up for AWS.
 - FYI, if anyone wants to keep using httpie, here's a sample request to show how you would format to use a token for auth:
 ```
`http GET :5000/api/gallery/1234-5678   'Authorization:Bearer myWonderfulToken'`
```
- Added multer to package.json
- Added aws-sdk to package.json

#### <a name="resources"></a>Any resources that helped me complete this project:
- Postman
- AWS

#### Notes to myself:
* 9/12- POST and GET requests seem to be working in Postman. I am getting tokens. Still need to test PUT and DELETE. Also I only have what Scott wrote in demo code for tests. Still need to write tests for the second GET, PUT and DELETE.
* cf-gram-dev is showing up as a database in the mongo shell!

### <a name="collaborators"></a>Collaborators:
Isiah! Said! Isaac!
