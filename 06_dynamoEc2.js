const { DynamoDBClient } = require ("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const post = async (PK,SK) => {
  const command = new PutCommand({
    TableName: "pets",
    Item: {
      PK,
      SK
    },
  });

  try {
    return await docClient.send(command);
  } catch (error) {
    return error;
  }

};

module.exports = {
  post,
};