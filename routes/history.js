let express = require("express");
let router = express.Router();
let historyController = require("../controller/history");

router.get("/", historyController.getHistoryItems);
router.post("/", historyController.addHistoryItem);
router.delete("/:id", historyController.deleteHistoryItem);

module.exports = router;
