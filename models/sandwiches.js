let orm = require("../config/orm.js");

let sandwiches = {
  selectAll: function(cbController) {
    orm.selectAll(function(data) {
      cbController(data);
    });
  },
  insertOne: function(newSandwich, cbController) {
    orm.insertOne(newSandwich, function(data) {
      cbController(data);
    });
  },
  updateOne: function(id, cbController) {
    orm.updateOne(id, function(data) {
      cbController(data);
    });
  }
};

module.exports = sandwiches;
