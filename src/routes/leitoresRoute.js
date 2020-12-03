const express = require("express");
const router = express.Router();
const controller = require('../controllers/leitoresController');

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postLeitor);
router.delete("/:id", controller.deleteLeitor);
router.put("/:id", controller.putLeitor);

module.exports = router;