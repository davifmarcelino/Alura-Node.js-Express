const passport = require("passport");

module.exports = {
  local: (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, usuario, info) => {
      if (err && err.name === "InvalidArgumentError") {
        return res.status(401).json({ erro: err.message });
      }

      if (err) {
        return res.status(500).json({ erro: err.message });
      }

      if (!usuario) {
        res.status(400).send();
      }

      req.user = usuario;
      next();
    })(req, res, next);
  },
  bearer: (req, res, next) => {
    passport.authenticate(
      "bearer",
      { session: false },
      (err, usuario, info) => {
        if (err && err.name === "JsonWebTokenError") {
          res.status(401).json({ erro: err.message });
        }

        if (err && err.name === "TokenExpiredError") {
          res
            .status(401)
            .json({ erro: err.message, expiradoEm: err.expiredAt });
        }

        if (err) {
          res.status(500).json({ erro: err.message });
        }

        if (!usuario) {
          res.status(401).send();
        }
        
        req.token = info.token;
        req.user = usuario;
        next();
      }
    )(req, res, next);
  },
};
