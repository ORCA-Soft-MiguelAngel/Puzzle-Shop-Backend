import "module-alias/register";
import express from "express";
import userRoutes from "@routes/userRoutes";
import orderRoutes from "@routes/orderRoutes";

const app = express();

//ROUTES
app.use(express.json());
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Server running at http://localhost:${port}`);
