const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
const repuestoController = require("./controllers/RepuestoController");
const usuarioController = require("./controllers/UsuarioController");
const ventaController = require("./controllers/VentaController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app
  .route("/repuestos")
  .get(repuestoController.listAllRepuestos)
  .post(repuestoController.createNewRepuesto);

app
  .route("/repuestos/:repuestoid")
  .get(repuestoController.readRepuesto)
  .put(repuestoController.updateRepuesto)
  .delete(repuestoController.deleteRepuesto);

app
  .route("/usuarios")
  .get(usuarioController.listAllUsuarios)
  .post(usuarioController.createNewUsuario);

app
  .route("/usuarios/:usuarioid")
  .get(usuarioController.readUsuario)
  .put(usuarioController.updateUsuario)
  .delete(usuarioController.deleteUsuario);

app
  .route("/ventas")
  .get(ventaController.listAllVentas)
  .post(ventaController.createNewVenta);

app
  .route("/ventas/:ventaid")
  .get(ventaController.readVenta)
  .put(ventaController.updateVenta)
  .delete(ventaController.deleteVenta);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
