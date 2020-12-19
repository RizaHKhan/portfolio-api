let express = require("express");
let router = express.Router();
let historyController = require("../controller/historyController");

router.get("/", historyController.getHistoryItems);
// router.post("/", historyController.addHistoryItem);
// router.delete("/:id", historyController.deleteHistoryItem);
// router.put("/:id", historyController.updateHistoryItem);

module.exports = router;
