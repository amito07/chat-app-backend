import express, { Request, Response } from "express";
import { createServer } from "http";
import SocketService from "./services/socket";
import entryRouter from './routers/index';

const PORT = 8000;

const app = express();
const server = createServer(app);

const socketService = new SocketService();
socketService.io.attach(server);

app.use("/api/v1", entryRouter);

app.get("/health", (req: Request, res: Response) => {
  res.send("Server health is ok!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

socketService.initListeners();
