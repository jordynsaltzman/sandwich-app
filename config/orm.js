var connection = require("../config/connection.js");

//creating the methods that will execute the necessary MySQL commands in the controllers.
var orm = {
  selectAll: function(cbModel) {
    var queryString = "SELECT * FROM sandwiches";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cbModel(result);
    });
  },
  insertOne: function(sandwich, cbModel) {
    var queryString = "INSERT INTO sandwiches(sandwich_name) VALUES (?)";
    connection.query(queryString, [sandwich], function(err, result) {
      if (err) {
        throw err;
      }
      cbModel(result);
    });
  },
  updateOne: function(id, cbModel) {
    var queryString = "UPDATE sandwiches SET devoured = true WHERE id = ?";
    connection.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }
      cbModel(result);
    });
  }
};

//Exporting the ORM object
module.exports = orm;
