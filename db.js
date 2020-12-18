require("dotenv").config();
const mongodb = require("mongodb");

mongodb.connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) throw err;
    module.exports = client;
    const app = require("./app");
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  }
);
