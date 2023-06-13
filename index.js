const express = require("express");
const app = express();
const cors = require("cors");
const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use(cors());

app.use("/api/testprecor", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
