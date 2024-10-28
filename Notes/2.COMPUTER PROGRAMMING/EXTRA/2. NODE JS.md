
### what 
- Node js is a runtime env for javscript
- asynchronous, non-blocking programming
### setup
- download and install node js
- run any .js file cmd : `node index.js`
### npm 
- npm is package manager
- by defalut download with node js 
- alternative -->yarn , pnpm 
- **versioning**
### modules in js
- nothing just js file 
    1. built-in module --> fs for file handling , http for make server
    2.  user make  -->  my.js 
- export --> module.exports = {fun1 , fun2}
- imoport ---> require("path/math.js")
- when require any module (js file) then   js-file run and return which assign in module.exports.
### file handling
- using fs module for file handling
### how node js work 

### make a server 
```js
const http = require("http"); // ![[Capture.jpg]]buit-in module http
const server = http.createServer((req, res) => {
  res.end("hello");
});

server.listen(8000, () => {
  console.log("listing on the port number 8000");
});
```

### URL
![[Capture.jpg]]
 ![[Pasted image 20231008183221.png]]


### http methods
- GET , POST , PUT , PATCH , DELETE 
- 1. GET -- when you want to get some data form the server
- 2. POST --  when you want to send and mutate some data in server

### server using express framework/library 
```js
const express = require("express")
const app = express()
app.get('/', (req,res) => {
  res.send("hello")
})

app.listen(8000, () =>
{
  console.log("listening in port 8000")
})

```

### rest api 


### middleware
- Middleware_ functions are functions that have access to the [request object](https://expressjs.com/en/4x/api.html#req) (`req`), the [response object](https://expressjs.com/en/4x/api.html#res) (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`. ![[Pasted image 20231009091700.png]]
```javascript
const express = require('express')
const app = express()

app.use((req, res, next) => {   //middleware
  console.log('Time:', Date.now())
  next()
})
```


### http header
- http header are an important part of the Api request and response.
- they represent the meta-data associted with the Api request and response.
- header carry infomation for the request and response
- we also add the custom data 
- **note** :  for good practice header custom data key start with X- 

### http status code 
- HTTP response status codes indicate whether a specific [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) request has been successfully completed. Responses are grouped in five classes:
1. Informational responses (`100` – `199`)
2. Successful responses (`200` – `299`)
3. Redirection messages (`300` – `399`)
4. Client error responses (`400` – `499`)
5. Server error responses (`500` – `599`)

### [mongodb](obsidian://open?vault=Notes&file=PROGRAMMING%2FTOOL%20TEACH%2FMONGODB)

### model view controller
![[Pasted image 20231009192833.png]]


### authentication 
- Two type of pattern for authentication 
-  **1. statefull** - which maintains state or data or server side
- **2. stateless** - which has no state (strict recommendation)
     - using jsonwebtoken library 

### authorization

### file uploading
- npm using multer

### web socket 
- real time commiction

### NGINX
- ssl certification 

## Event Loop and Asynchronous Programming

- Understanding the event loop and how it enables non-blocking I/O operations
- Writing asynchronous code using callbacks, Promises, and async/await

## Modules and npm

- Creating and using modules in Node.js
- Using npm to manage and install packages
- Developing your own npm packages

## File System and Streams
- Implementing streaming for efficient handling of large files -->


## Real-time Applications with WebSocket

- Implementing real-time communication using WebSocket protocol
- Building chat applications and real-time dashboards

## Authentication and Security

- Implementing user authentication and authorization
- Protecting against common security vulnerabilities (e.g., SQL injection, XSS)

## Testing and Debugging

- Writing unit tests and integration tests using testing frameworks like Mocha and Jest
- Debugging Node.js applications using built-in tools and IDE integrations

## Scaling and Performance

- Strategies for scaling Node.js applications
- Optimizing application performance and handling concurrency

## Deployment and DevOps

- Deploying Node.js applications to various hosting platforms (e.g., Heroku, AWS, Azure)
- Continuous integration and continuous deployment (CI/CD) pipelines

## Middleware and Plugins

- Developing custom middleware to handle various stages of request processing
- Integrating third-party plugins and middleware

## Serverless Computing

- Building serverless applications using platforms like AWS Lambda and Azure Functions
- Leveraging the benefits of serverless architecture

## Best Practices and Design Patterns

- Following best practices for structuring and organizing Node.js applications
- Understanding and implementing design patterns relevant to Node.js