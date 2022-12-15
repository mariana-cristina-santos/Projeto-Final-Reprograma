const controller = require("../controllers/seriesController")

const express = require("express")

const router = express.Router()

router.get("/todos", controller.encontraTodasAsSeries);
router.get("/:id", controller.encontraSeriePorId);
router.post("/novo", controller.adicionaNovaSerie);
router.patch("/:id", controller.atualizaPorId);
router.delete("/:id", controller.deletaSerie);

module.exports = router