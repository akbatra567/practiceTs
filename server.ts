import express from "express";
const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});

app.listen(3000, "192.168.29.249", () => {
  console.log("server running at localhost:3000");
});
