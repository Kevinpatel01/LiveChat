// const express = require("express");
// const {
//   accessChat,
//   fetchChats,
//   createGroupChat,
//   fetchGroups,
//   groupExit,
//   addSelfToGroup,
// } = require("../Controllers/chatController");
// // const { accessChat } = require("../Controllers/chatController");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChats);
// router.route("/createGroup").post(protect, createGroupChat);
// router.route("/fetchGroups").get(protect, fetchGroups);
// router.route("/groupExit").put(protect, groupExit);
// router.route("/addSelfToGroup").put(protect, addSelfToGroup);

// module.exports = router;


const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  groupExit,
  fetchGroups,
} = require("../Controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/createGroup").post(protect, createGroupChat);
router.route("/fetchGroups").get(protect, fetchGroups);
router.route("/groupExit").put(protect, groupExit);

module.exports = router;