const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const db = require("./config/dbConnection");
const schema = require("./schema/schema");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors()); // make sure to pass domain whitelist to cors options for production
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
  console.log(`Database Connection: ${db.host}`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    if (process.env.NODE_ENV === "development") {
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    }
  });
});
