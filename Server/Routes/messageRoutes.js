// const express = require("express");

// const {protect} = require("../middleware/authMiddleware");
// const { allMessages, sendMessage } = require("../Controllers/messageController");

// const router = express.Router();

// router.route("/:chatId").get(protect, allMessages);
// router.route("/").post(protect, sendMessage);

// module.exports = router;

const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;