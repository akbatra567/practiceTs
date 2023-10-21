import express from "express";
import logger from "./logger";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});

app.listen(3000, () => {
  logger.info("server running at localhost:3000");
});
