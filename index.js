/*
 * Title: Uptime Monitoring  Application
 * Description: A RESTFULL API to monitor up or down time of user defined links
 * Author: Md Sajjadul Islam
 * Date: 01/10/2024
 */

//dependencies
const http = require("http");

// Custom Modules
const { handleRegRes } = require('./helpers/handleRegRes');

//App object - module scaffolding
const app = {};

//configs
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleRegRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port on ${app.config.port}`);
  });
};

//Handle Request Response
app.handleRegRes = handleRegRes;

//Start the server
app.createServer();
 