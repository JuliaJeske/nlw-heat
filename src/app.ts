import "dotenv/config";
import { router } from './router'
import express from "express";
import {Server, Socket} from "socket.io"
import cors from "cors"
import http from "http"

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: '*'
  }
});

io.on("connection", socket => {
  console.log("Usuário conectado no socket")
})

app.use(cors())
app.use(express.json())
app.use(router);

app.get('/github',(req,res) => {

  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
}) 
app.get("/signin/callback", (req,res) => {
  const { code } = req.query;

  return res.json(code)
})

export{ serverHttp, io}