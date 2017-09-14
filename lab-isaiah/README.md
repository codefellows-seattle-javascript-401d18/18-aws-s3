# 18-Isaiah

### Configuration
```md
  * \__test__ (folder: contains a lib/ folder(handles the jest setup, test-env, and mock ups) and routes/ folder(handles the basic auth tests, gallery tests, and photo test.))
  * lib (folder: contains aws-s3.js, basic-auth-middleware.js, bearer-auth-middleware.js, error-handler.js, and server.js)
  * model (folder: contains user.js which houses the user schema, photo.js which houses the photo schema, && gallery.js which houses the gallery schema)
  * route (folder: contains route-auth.js, route-gallery.js, && route-photo.js)
  * .travis.yml
  * .env
  * .gitignore
  * .eslintrc
  * .eslintignore
  * package.json
  * README.md (this file)
```

### Feature Tasks:
* Completed feature tasks. Majority, covered today in demo. Got server up and running with success with CRUD operation command requests. Need to continue to dig through tests. See below for Lab work requirements...


##### Lab assignment requirements are as follows:
      ```md
      ![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 18: Image Uploads w/ AWS S3
      ===

      ## Submission Instructions
        * fork this repository & create a new branch for your work
        * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
        * push to your repository
        * submit a pull request to this repository
        * submit a link to your PR in canvas
        * write a question and observation on canvas

      ## Learning Objectives  
      * students will be able to upload static assets to AWS S3
      * students will be able to retrieve a cdn url that contains the previously uploaded static asset
      * students will be able to work with secret and public access keys

      ## Requirements
      #### Configuration
      * `package.json`
      * `.eslintrc.json`
      * `.eslintignore`
      * `.gitignore`
      * `README.md`

      #### Description
      * create an AWS account
      * create an AWS Access Key and Secret
        * add the Access Key and Secret to your `.env` file
        * **DO NOT SHARE THESE KEYS, AND DO NOT COMMIT THEM**
      * create a new model that represents a file type that you want to store on AWS S3
        * ex: `.mp3`, `.mp4`, `.png`, etc
      * create a test that uploads one of these files to your route
      * use the `aws-sdk` to assist with uploading
      * use `multer` to parse the file upload request

      #### Server Endpoint
      * `POST` - `/api/new-resource`
        * _your new resource will have a reference to the primary resource that we already have functional_
        * _that resource will need to be passed via the `req.body`_
      * `GET` - `/api/new-resource/:_id`
      * `PUT` - `/api/new-resource/:_id`
      * `DELETE` - `/api/new-resource/:_id`

      ## Tests
      * create a test to ensure that your API returns a status code of 404 for routes that have not been registered
      * create a series of tests to ensure that your `/api/resource-name` endpoint responds as described for each condition below:
      * `GET` - test **200**, for a request made with a valid id
      * `GET` - test **401**, if no token was provided
      * `GET` - test **404**, for a valid request with an id that was not found
      * `PUT` - test **200**, for a post request with a valid body
      * `PUT` - test **401**, if no token was provided
      * `PUT` - test **400**, if the body was invalid
      * `PUT` - test **404**, for a valid request made with an id that was not found
      * `POST` - test **200**, for a post request with a valid body
      * `POST` - test **401**, if no token was provided
      * `POST` - test **400**, if no body was provided or if the body was invalid


      #### Bonus: 3pts
      * try using the `deleteObject` method provided by the `aws-sdk` to delete an object *(file)* from S3
        * you will need to pass in a `params` object that contains the associated Bucket and AWS object key in order to delete the object from s3
        * ex:
        ``` javascript
        var params = {
          Bucket: 's3-bucket-name',
          Key: 'object-filename'
        }
        s3.deleteObject(params)
        ```
      * don't forget to remove the resource from the DB

      ```

### Description:
* Continuing to build upon our api, implemented a new resource (photo) that is aware if its user by userId and gallery by galleryId. Photo constructor contains the following properties: `name`, `desc`, `userId`, `galleryId`, `imageURI`,and `objectKey`. With end in site to this api, this lab includes `AWS` tokens in the `.env` as we gear towards deployment. Test suites need work to make req pattern of testing status responses. 
