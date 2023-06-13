const express = require("express");
const app = express();
const cors = require("cors");
const product = require("./api/product");

app.use(express.json({ extended: false }));

// Enable CORS
app.use(cors({
  origin: ['http://express-vercel-tau-three.vercel.app']
}));

app.use("/api/testprecor", precor);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
