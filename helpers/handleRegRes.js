/*
 * Title: Request and Response Handler
 * Description: Request and Response Handler
 * Author: Md Sajjadul Islam
 * Date: 01/10/2024
 */

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");

//App object - module scaffolding
const requestHandler = {};


//Handle Request Response
requestHandler.handleRegRes = (req, res) => {
  // request handling
  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const triamedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    //console.log(queryStringObject);
    console.log(realData);

    res.end("Hello from Node API");
  });

  //console.log(queryStringObject);
  // console.log(headerObject)

  // res.end("Hello from Node API");
};


module.exports = requestHandler;