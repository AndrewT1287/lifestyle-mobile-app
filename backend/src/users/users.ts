import { DynamoDBClient, CreateTableCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

// Do Once

const client = new DynamoDBClient({
    region: "local"});

const docClient = DynamoDBDocumentClient.from(client);

function create_users_table() {
    const create = async () => {
        // Creates dynamoDB table with a username primary key. 
        const command = new CreateTableCommand({
          TableName: "Users",
          AttributeDefinitions: [
            {
              AttributeName: "Username",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "Username",
              KeyType: "HASH",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        });

        try {
            const response = await client.send(command);
            console.log("Create Table Response:")
            console.log(response)
            console.log(" ")  
        } catch (exception) {
            console.log("Table exists.")
            console.log(exception)
        }

    }
    create()
}

// Do on Request
function add_user(user_name: string) {
    const add = async () => {
        const command = new PutCommand({
            TableName: "Users",
            Item: {
              "Username": user_name,
            },
          });
        const response = await docClient.send(command);
        console.log("Add User Response:");
        console.log(response);
    }
    add()
}

function show_table() {
    // see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes and
    // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html#Programming.LowLevelAPI.DataTypeDescriptors
    const show = async () => {
        const command = new ScanCommand({
            TableName: "Users",
        });
        const response = await docClient.send(command);
        console.log(response);
    }
    show()
}

export {add_user, create_users_table}