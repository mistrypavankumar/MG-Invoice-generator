const app = require("./app");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/database");

// handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);

  process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "backend/config/config.env" });
}

const PORT = process.env.PORT || 5000;

// connecting to database
connectDatabase();

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// handling unhandledRejection like promise
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);

  server.close(() => {
    process.exit(1);
  });
});
