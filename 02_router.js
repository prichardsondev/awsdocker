//map routes to controller
"use strict";

const { controller } = require("./03_controller");

module.exports = (app) => {
  app.route("/health").get(controller.getHealth);
  app.route("/pets").get(controller.getPets);
  app.route("/pets").post(controller.putPet);
};