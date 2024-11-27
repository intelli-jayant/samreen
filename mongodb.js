const mongoose = require("mongoose");

// MongoDB connection using the provided MongoDB Atlas connection string
mongoose
  .connect("mongodb://127.0.0.1:27017/rani", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Define the schema for login credentials
const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model
const collection = mongoose.model("LoginCollection", LogInSchema);

// Export the model for use in other files
module.exports = collection;
