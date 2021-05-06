const { Router } = require("express");
const router = Router();
const matriculas = require("../controllers/matriculas");

router.get("/", matriculas.index);
router.get("/:id", matriculas.show);
router.post("/", matriculas.store);
router.put("/:id", matriculas.update);
router.delete("/:id", matriculas.delete);

module.exports = router;
