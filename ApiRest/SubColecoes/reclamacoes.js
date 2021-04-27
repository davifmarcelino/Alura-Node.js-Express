const { Router } = require("express");
const router = Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.send(JSON.stringify([]));
});

module.exports = router;
