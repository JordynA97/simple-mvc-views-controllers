const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

const hostIndex = (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

const hostPage1 = (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

const notFound = (req, res) => {
  res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
}

//get request
const getName = (req, res) => {
  res.json({name});
};

//post request
const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname){
    return res.status(400).json({error: 'First name and last name are required'});
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({name});
};

module.exports = {
  page1: hostPage1,
  page2: hostPage2,
  index: hostIndex,
  notFound,
  getName,
  setName,
};