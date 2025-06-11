const express = require("express");
const router = express.Router();

const despesaController = require("../models/despesaModel");

// Usando as funções exportadas do modelo (que está fazendo o papel de controller também)

router.get("/", despesaController.getAll);
router.get("/:id", despesaController.getById);
router.post("/", despesaController.create);
router.put("/:id", despesaController.update);
router.delete("/:id", despesaController.delete);

module.exports = router;
