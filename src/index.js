import express, { urlencoded } from "express";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import router from "./routes.js";

// Path Settings
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Express Settings
const app = express();

// EJS - Settings
app.set("view engine", "ejs");
console.log(path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));

// Pages - Settings
app.use(express.static("public"));
app.use(urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server has been started at Port ${PORT}`));
