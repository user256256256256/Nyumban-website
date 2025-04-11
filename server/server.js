import express from 'express';
import cors from 'cors';
import subscriberRoutes from "./routes/subscriber.js"

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/subscribers", subscriberRoutes)

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
