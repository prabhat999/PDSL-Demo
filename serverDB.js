const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "hrhk",
  database: "postgres",
});

client.connect();

const query = `
CREATE TABLE if NOT EXISTS users (
  id serial,
  email varchar,
  firstName varchar,
  lastName varchar,
  phoneNumber numeric,
  password varchar,
  verificationCode varchar,
  verified boolean
);`;

client.query(query, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected to database");
  client.end();
});
