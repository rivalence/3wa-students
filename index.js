import express from "express"
import mangaRouter from "./routes/manga.js";

const app = express()

app.use(express.json());

app.use("/", mangaRouter)

app.listen(8000, ()=>{
    console.log(`Server is listening in port 8000`);
})