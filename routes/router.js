const routes = require("express").Router();
const filmeController = require("../controllers/filmeController");

routes.get('/', filmeController.getAll);
routes.get('/create', filmeController.create);
routes.get('/getById/:id/:method', filmeController.getById);
routes.post('/update/:id', filmeController.update);
routes.get('/remove/:id', filmeController.remove);
routes.post('/search', filmeController.searchByName);

routes.get("/signup", filmeController.signup);

module.exports = routes;