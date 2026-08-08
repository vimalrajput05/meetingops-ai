require("dotenv").config();

const connectDB = require("./src/config/db");
const app = require("./src/app");

const PORT = 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();