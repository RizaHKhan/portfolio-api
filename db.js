require("dotenv").config();
const { MongoClient } = require("mongodb");
const app = require("./app");

async function main() {
  const client = new MongoClient(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTypology: true,
  });

  try {
    await client.connect();
    await listDatabases(client);
    app.listen(process.env.PORT);
  } catch (e) {
    console.log(e);
  }
}

async function listDatabases(client) {
  databaseList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databaseList.databases.forEach((db) => console.log(`Database: ${db.name}`));
}

main()
  .then(() => console.log(`Listening on port ${process.env.PORT}`))
  .catch((e) => console.log(e));
