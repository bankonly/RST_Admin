const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const userAgent = require("express-useragent");
const morgan = require("morgan");
let fs = require('fs');
const InitialApp = app => {
  app.use(cors());

  // user agent
  app.use(userAgent.express());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // accept image from body from data
  app.use(fileUpload());

  // Log all request
  app.use(morgan("dev"));
};

const OnEndInitialApp = app => {
  app.get("/", (req, response) => {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.readFile('./public/index.html', null, function (error, data) {
      if (error) {
        response.writeHead(404);
        response.write('Whoops! File not found!');
      } else {
        response.write(data);
      }
      response.end();
    });

  }
  );
};

module.exports.InitialApp = InitialApp;
module.exports.OnEndInitialApp = OnEndInitialApp;
