const express = require("express");
const router = express();
const PostController = require("../controllers/post");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Upload = require("../middleware/file");
const multiparty = require("connect-multiparty");
const mult = multiparty();

router.post("/saveTask", Auth, ValidateUser, PostController.saveTask);
router.post("/saveTaskImg",mult, Upload, Auth, ValidateUser, PostController.saveTaskImg);
router.get("/listTask", Auth, ValidateUser, PostController.listTask);
router.put("/updateTask", Auth, ValidateUser, PostController.updateTask);
router.delete(
  "/deleteTask/:_id",
  Auth,
  ValidateUser,
  PostController.deleteTask
);

module.exports = router;
