#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR( 255 ),
  username VARCHAR ( 50 ),
  date DATE DEFAULT CURRENT_DATE 
);

INSERT INTO messages (message, username, date) 
VALUES
  ('Test message 1', 'Edo', CURRENT_DATE),
  ('Test message 2', 'Mona',CURRENT_DATE),
  ('Test message 3', 'Poko',CURRENT_DATE);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
