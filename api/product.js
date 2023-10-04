const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.post("/", async (req, res) => {
  try {
    const { op, image} = req.body;
    let IP = ['192.168.1.70', '192.168.1.71', '192.168.1.72'];
    const created = "1696440261212";
    let random = 0;
    
    if ( op === "blueify" || op === "greenify" || op === "reddify" ) {
      const rand = Math.floor(Math.random() * IP.length);
      random = rand;
    }
    else {
      return res.status(500).send("Server error");
    }
    res.json({
      status: 200,
      data:{IP[random], created, image}
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "POst precor data successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
