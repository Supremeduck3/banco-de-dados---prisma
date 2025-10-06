import express from "express";
import dotenv from "dotenv";
const app = express();
app.use(express.json());


dotenv.config();
const portserver = process.env.PORT || 3001;

app.get ("/", (req, res) => {
    res.send("O servidor está funcionando ...")
});


app.listen(portserver, () => {
    console.log(`O servidor está rodando em http://localhost:${portserver}`)
});