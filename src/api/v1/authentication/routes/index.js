const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.js");
module.exports = function (api) {
  api.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  api.post("/signin", controller.signin);
};
