const controller = require("../controllers/filmesController")

const express = require("express")

const router = express.Router()

router.get("/todos", controller.encontraTodosOsFilmes);
router.get("/:id", controller.encontraFilmePorId);
router.post("/novo", controller.adicionaNovoFilme);
router.patch("/:id", controller.atualizaPorId);
router.delete("/:id", controller.deletaFilme);

module.exports = router