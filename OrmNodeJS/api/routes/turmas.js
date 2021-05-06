const { Router } = require("express");
const router = Router();
const turmas = require("../controllers/turmas");

router.get("/", turmas.index);
router.get("/:id", turmas.show);
router.post("/", turmas.store);
router.put("/:id", turmas.update);
router.delete("/:id", turmas.delete);

module.exports = router;
