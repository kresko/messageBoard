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
  ('Test message 1', 'Test User 1', CURRENT_DATE),
  ('Test message 2', 'Test User 2',CURRENT_DATE),
  ('Test message 3', 'Test User 3',CURRENT_DATE);
`;

async function main() {
    console.log("seeding...");
    const dbUrl = `${process.env.DATABASE_URL}`;

    const client = new Client({
        connectionString: dbUrl,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
