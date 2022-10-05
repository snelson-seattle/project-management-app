const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const db = require("./config/dbConnection");
const schema = require("./schema/schema");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.use(express.json());

db.once("open", () => {
  console.log(`MODE=${process.env.NODE_ENV}`);
  console.log("Datbase connection established.");
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
