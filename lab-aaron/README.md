![cf](http://i.imgur.com/7v5ASc8.png) 17: CODE-FELLOWS-GRAM
=====================================

## Creating a Password Protected Server
This app creates a server that is able to respond to GET, POST, PUT and DELETE requests that are created in the terminal. These requests and responses will create a new user in the database and encrypt the password and username created by the user. The app is also able to update and destroy the username and password using terminal commands using httpie.

With the most recent update we are introducing the Gallery.
With the Gallery you are able to add, update and remove images.


### Installation
Clone the repository to whatever location you would like it stored in.

In terminal use this command while in the project file:

 `npm i`

This will install all the required dependencies for the app.

You should have multiple terminal windows open. Either in a terminal window or in the background, should have your Mongo Database running. In another window you should install, if you haven't already, HTTPie. In yet another window, you should open your mongodb shell.

Start MongoDB:

`brew services start mongo`

this starts the server in the background

To enter the mongo shell:

`mongo`

In another window you can begin to signup and login!!

### Using the App
This will sign you up for the app.

 `http POST localhost:5000/api/signup username=username password=password email=user-email`

 You should also be able to get signed in to the app;

 `http GET localhost:5000/api/signin username:password`


#### Documentation for App
https://nodejs.org/en/

http://mongoosejs.com/

https://httpie.org/doc

https://www.npmjs.com/package/bcrypt

https://www.npmjs.com/package/jsonwebtoken

https://www.npmjs.com/package/express

https://www.npmjs.com/package/cors

https://www.npmjs.com/package/dotenv

https://www.npmjs.com/package/uuid

http://bluebirdjs.com/docs/getting-started.html
