var python = require("../controllers/Python.Controller");

module.exports = (app) => {

    app.get("/getPythonData", python.getPythonData);

};