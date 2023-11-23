const express = require("express");
const router = express.Router();

const elfbarController = require("../controllers/elfbar");

router.get("/", elfbarController.getElfbars);
router.get("/:id", elfbarController.getElfbar);
router.post("/", elfbarController.postElfbar);
router.put("/:id", elfbarController.putElfbar);
router.patch("/:id", elfbarController.patchElfbar);
router.delete("/:id", elfbarController.deleteElfbar);

module.exports = router;