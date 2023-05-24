import express from "express";
import uploadRoutes from "./src/routes/uploadRoutes";

const app = express();

// Other middleware and route configurations

// Register the upload routes middleware
app.use("/node-api", uploadRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
