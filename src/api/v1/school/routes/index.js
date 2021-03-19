const { authJwt } = require("../../authentication/middlewares");
const controller = require("../controllers");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/matches",
    [authJwt.verifyToken, authJwt.isSchool],
    controller.matches
  );

  app.get(
    "/matches/:match",
    [authJwt.verifyToken, authJwt.isSchool],
    controller.matchesByMatch
  );

  app.post(
    "/matches/new",
    [authJwt.verifyToken, authJwt.isTeacher],
    controller.matchesNew
  );
};
