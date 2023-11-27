const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const { fromIni } = require( "@aws-sdk/credential-providers");
const client = new DynamoDBClient({
  credentials: fromIni({ profile: "yourprofile" }),
  region: "us-east-1"
});
const docClient = DynamoDBDocumentClient.from(client);

const post = async (PK, SK) => {
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