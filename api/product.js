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
    let IP;
    const created = "1696440261212";
    
    if ( op === "blueify") {
      IP = "192.168.1.70";
    }
    else if ( op === "greenify") {
      IP = "192.168.1.71";
    }
    else if ( op === "reddify") {
      IP = "192.168.1.72";
    }
    else {
      return res.status(500).send("Server error");
    }
    res.json({
      status: 200,
      data:{IP, created, image}
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
