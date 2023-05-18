const express = require("express");
const router = express.Router();
const { getAll,getAllWomenProducts ,getAllmenProducts } = require("../controller/controller");

router.get("/getAll", getAll);
router.get("/women", getAllWomenProducts);
router.get("/men", getAllmenProducts);

module.exports = router;
