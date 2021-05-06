const { Router } = require("express");
const router = Router();
const niveis = require("../controllers/niveis");

router.get("/", niveis.index);
router.get("/:id", niveis.show);
router.post("/", niveis.store);
router.put("/:id", niveis.update);
router.delete("/:id", niveis.delete);

module.exports = router;
