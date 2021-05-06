const { Router } = require("express");
const router = Router();
const pessoas = require("../controllers/pessoas");

router.get("/", pessoas.index);
router.get("/:id", pessoas.show);
router.post("/", pessoas.store);
router.put("/:id", pessoas.update);
router.delete("/:id", pessoas.delete);

module.exports = router;
