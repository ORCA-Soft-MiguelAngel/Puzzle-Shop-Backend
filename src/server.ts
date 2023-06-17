import "module-alias/register";
import express from "express";
import userRoutes from "@routes/userRoutes";
import orderRoutes from "@routes/orderRoutes";
import authRoutes from "@routes/authRoutes";
import connectDB from "@config/database";
import { corsMiddleware } from "@middlewares/corsMiddleware";
import { errorHandlerMiddleware } from "@middlewares/errorHandlerMiddleware";

const app = express();

//CORS
app.use(corsMiddleware());

//ROUTES
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use(errorHandlerMiddleware);

// Connect to the database
connectDB()
  .then(() => {
    // Database connection successful, start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });
