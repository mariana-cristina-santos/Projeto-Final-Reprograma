const filmeModel = require("../models/filmesModel");

const encontraTodosOsFilmes = async (req, res) => {
  try {
    const todosOsFilmes = await filmeModel
  .find({}, null);
    res.status(200).json(todosOsFilmes);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const encontraFilmePorId = async (req, res) => {
  try {   
    const encontraFilme = await filmeModel
  .findById(req.params.id);
    res.status(200).json(encontraFilme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionaNovoFilme = async (req, res) => {
  try {
    const {
      titulo,
      anoLancamento,
      disponivel,
      sinopse,
      atores,
      avaliacao,
      nota,
    } = req.body;

    const novoFilme = new filmeModel
  ({
      titulo,
      anoLancamento,
      disponivel,
      sinopse,
      atores,
      avaliacao,
      nota,
    });
    const filmeSalvo = await novoFilme.save();
    res
      .status(200)
      .json({ message: "Novo filme adicionado!", filmeSalvo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const atualizaPorId = async (req, res) => {
  try {
    const {
      titulo,
      anoLancamento,
      disponivel,
      sinopse,
      atores,
      avaliacao,
      nota,
    } = req.body;
    const atualizaFilme = await filmeModel
  .findByIdAndUpdate(
      req.params.id,
      {
        titulo,
        anoLancamento,
        disponivel,
        sinopse,
        atores,
        avaliacao,
        nota,
      }
    );
    res.status(200).json(atualizaFilme);
  } catch {
  console.error(error);
  res.status(500).json({ message: error.message });
}
};

const deletaFilme = async (req, res) => {
  try {
    const { id } = req.params;
    const encontraFilme = await filmeModel
  .findById(id);

    if (encontraFilme == null) {
      return res.status(404).json({ message: `Filme com o id ${id} não foi encontrado` })
    };
    await encontraFilme.remove();
    res.status(200).json({ message: `filme com  ${id} foi deletado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  encontraTodosOsFilmes,
  encontraFilmePorId,
  adicionaNovoFilme,
  atualizaPorId,
  deletaFilme,
};