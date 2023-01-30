const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = 3000;
const HOST = "localhost";

const notion = new Client({
  auth: process.env.API_KEY,
});
const databaseId = process.env.TODO_DB;
const databaseId2 = process.env.COMP_DB;
const mapId = {};

app.post("/done", jsonParser, async (req, res) => {
  const id = String(req.body.id);
  const todo = req.body.todo;
  try {
    console.log(req.body);
    const response = await notion.pages.create({
      parent: { database_id: databaseId2 },
      properties: {
        id: {
          title: [
            {
              text: {
                content: id,
              },
            },
          ],
        },
        todo: {
          rich_text: [
            {
              text: {
                content: todo,
              },
            },
          ],
        },
      },
    });
    mapId[id] = response.id;
    console.log(mapId);
    res.send(response);
    console.log(response);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete:id", async (req, res) => {
  console.log(req.params.id);
  console.log(mapId);
  const pgId = mapId[req.params.id];
  try {
    await notion.pages.update({
      page_id: pgId,
      archived: true,
    });
    res.send("deleted successfully");
  } catch (error) {
    console.log("error");
  }
});

app.post("/update:id", jsonParser, async (req, res) => {
  console.log(req.params.id);
  const todo = req.body.todo;
  const pgId = mapId[req.params.id];
  try {
    await notion.pages.update({
      page_id: pgId,
      properties: {
        todo: {
          rich_text: [
            {
              text: {
                content: todo,
              },
            },
          ],
        },
      },
    });
    res.send("updated successfully");
  } catch (error) {
    console.log("error");
  }
});

app.get("/getAll", async (req, res) => {
  console.log("retriving data");
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    // const prop = response.properties;

    const todos = [];
    response.results.forEach((result) => {
      const todo = {
        todo: result.properties.todo.rich_text[0].plain_text,
        id: result.properties.id.title[0].plain_text,
        pg_id: result.id,
      };
      mapId[todo.id] = todo.pg_id;
      todos.push(todo);
    });
    res.send(todos);
    console.log(response);
    console.log(mapId);
  } catch (error) {
    console.log("error");
  }
});

app.get("/getAllCompleted", async (req, res) => {
  console.log("retriving data");
  try {
    const response = await notion.databases.query({
      database_id: databaseId2,
    });
    // const prop = response.properties;

    const todos = [];
    response.results.forEach((result) => {
      const todo = {
        todo: result.properties.todo.rich_text[0].plain_text,
        id: result.properties.id.title[0].plain_text,
        pg_id: result.id,
      };
      mapId[todo.id] = todo.pg_id;
      todos.push(todo);
    });
    res.send(todos);
    console.log(response);
    console.log(mapId);
  } catch (error) {
    console.log("error");
  }
});
app.post("/submit", jsonParser, async (req, res) => {
  const id = String(req.body.id);
  const todo = req.body.todo;
  try {
    console.log(req.body);
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        id: {
          title: [
            {
              text: {
                content: id,
              },
            },
          ],
        },
        todo: {
          rich_text: [
            {
              text: {
                content: todo,
              },
            },
          ],
        },
      },
    });
    mapId[id] = response.id;
    console.log(mapId);
    res.send(response);
    console.log(response);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => res.send("Server Running"));

app.listen(PORT, HOST, () => console.log(`app listening on port ${PORT}!`));
