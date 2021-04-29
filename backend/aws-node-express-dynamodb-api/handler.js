const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
var cors = require('cors')

const firebaseTokenVerifier = require('firebase-token-verifier');
const projectId = 'tri-auth'

const app = express();

const USERS_TABLE = 'Tri-Posts';
// const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

app.use(express.json());
app.use(cors())

const headers = {
  'Access-Control-Allow-Origin': '*'
}

// add api for posts
app.get("/getposts/:userid", async function (req, res) {

  // check the header named Authorization
  const token = req.get("Authorization")
  if (!token) {
    res.status(401).header(headers)
  }

  try {
    // validate the token from the request
    const decoded = await firebaseTokenVerifier.validate(token, projectId)
  } catch (err) {
    // the token was invalid,
    console.error(err)
    res.status(401).header(headers)
  }

  // user is now confirmed to be authorized, return the data
  var userKey =  req.params.userid;

  // read json file to response
  // try {
  //   var content = require('./data/'+userid+'.json');
  //   res.status(200).header(headers).json({ content });    
  // } catch (error) {
  //   console.log(error);
  //   var content = require('./data/dummydata.json');
  //   res.status(500).header(headers).json({ content });
  // }

  // read dynamodb to response
  return ddb    
  .query({      
    TableName: USERS_TABLE,
    // IndexName: 'userKey-timestamp-index',      
    KeyConditionExpression: 'UserId = :userKey',
    ExpressionAttributeValues: {        
      ':userKey': {S: userKey}   
    }
  })    
  .promise()    
  .then(
    (results) => {
      res.status(200).header(headers).json(results.Items);
    },
    (error) => {
      res.status(500).header(headers).json({ error });
    }
  );
});

app.post("/getposts", async function (req, res) {

  // check the header named Authorization
  const token = req.get("Authorization")
  if (!token) {
    res.status(401).header(headers)
  }

  try {
    // validate the token from the request
    const decoded = await firebaseTokenVerifier.validate(token, projectId)
  } catch (err) {
    // the token was invalid,
    console.error(err)
    res.status(401).header(headers)
  }

  const { post } = req.body;
  if (!post) {
    res.status(400).header(headers).json({ error: 'Missing body' });
  }

  const requestBody = JSON.parse(post)

  // TODO write that data to your dynamodb table
  const params = {
    TableName: USERS_TABLE,
    Item: 
      requestBody
  };

  try {
    await ddb.put(params).promise();
    res.json({ requestBody });
    res.status(201).header(headers)

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create post" });
  }
});


// task: $YOUR_URL_HERE/whoami with your username as JSON "{ "username": "da335" }"
app.get("/whoami/:username", async function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      username: req.params.username,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { username } = Item;
      res.json({ username });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "username"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});

app.post("/whoami", async function (req, res) {
  const { username } = req.body;
  if (typeof username !== "string") {
    res.status(400).json({ error: '"username" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      username: username,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ username });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
