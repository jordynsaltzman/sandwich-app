let sandwiches = require("../models/sandwiches");

function routes(app) {
  app.get("/", function(req, res) {
    sandwiches.selectAll(function(data) {
      res.render("index", { sandwiches: data });
    });
  });

  app.post("/api/sandwiches", function(req, res) {
    let newSandwich = req.body.sandwich_name;
    console.log(newSandwich);
    sandwiches.insertOne(newSandwich, function(data) {
      res.json(data);
    });
  });

  app.put("/api/sandwiches/:id", function(req, res) {
    let id = req.params.id;
    sandwiches.updateOne(id, function(data) {
      res.json(data);
    });
  });
}

//exporting the routes
module.exports = routes;
