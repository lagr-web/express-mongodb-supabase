//https://medium.com/@skhans/building-a-restful-api-with-express-js-a-beginners-guide-dcb1a1e3520d
//https://blog.logrocket.com/how-to-set-up-node-typescript-express/

// app.js

import express from "express";
import { PORT } from "./config.js";
import routes from "./routes.js";

//const port = process.env.PORT || 3001;

const app = express();

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server Listening and is ready on PORT:", PORT);
});
