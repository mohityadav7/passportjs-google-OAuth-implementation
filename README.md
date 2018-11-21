# passportjs-google-OAuth-implementation
[Google OAuth Strategy](http://www.passportjs.org/packages/passport-google-oauth/) implementation (Login and Logout) using [Passport.js](http://www.passportjs.org/) in [Node.js](https://nodejs.org/)

### Tech

[node.js]() - evented I/O for the backend

[Express](https://expressjs.com/) - fast node.js network app framework

[ejs](https://ejs.co/) - Embedded JavaScript templating

[Twitter Bootstrap](https://getbootstrap.com/) - great UI boilerplate for modern web apps

### Installation
You need [Node.js](https://nodejs.org/) installed to run.

**Clone repository**

```sh
$ git clone https://github.com/mohityadav7/passportjs-google-OAuth-implementation.git
```

Add **keys.js** in **config** folder.
```
module.exports = {
  google: {
    clientID: <CLIENT_ID_STRING>,
    clientSecret: <CLIENT_SECRET_STRING
  },
  mongoDB: {
    dbURI: <MONGO_DB_URI_STRING>,
  },
  session: {
    cookieKey: <COOKIE_KEY>,
  },
};
```

**Install dependencies.**
```
$ npm install
```

**Run**
```
$ node index.js
```
