const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { add, select } = require("./message");

//    	--(req.query); in get
// --(req.body); in post
app.get("/get", async (req, res) => {
  const list = await select();
  res.json(list);
});

app.post("/post", async (req, res) => {
  const mesg = req.body;
  await add(mesg);
  res.json("message added");
});
app.listen(4300, () => {
  message: "Added";
});
