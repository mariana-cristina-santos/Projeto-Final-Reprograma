const serieModel = require("../models/seriesModel");

const encontraTodasAsSeries = async (req, res) => {
  try {
    const todasAsSeries = await serieModel
  .find({}, null);
    res.status(200).json(todasAsSeries);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const encontraSeriePorId = async (req, res) => {
  try {   
    const encontraSerie = await serieModel
  .findById(req.params.id);
    res.status(200).json(encontraSerie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionaNovaSerie = async (req, res) => {
  try {
    const {
      titulo,
      anoLancamento,
      temporada,
      disponivel,
      sinopse,
      atores,
      avaliacao,
      nota,
    } = req.body;

    const novaSerie = new serieModel
  ({
      titulo,
      anoLancamento,
      temporada,
      disponivel,
      sinopse,
      atores,
      avaliacao,
      nota,
    });
    const serieSalva = await novaSerie.save();
    res
      .status(200)
      .json({ message: "Nova série adicionada!", serieSalva });
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
    const atualizaSerie = await serieModel
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
    res.status(200).json({message: "Serie foi atualizada!",atualizaSerie});
  } catch {
  console.error(error);
  res.status(500).json({ message: error.message });
}
};

const deletaSerie = async (req, res) => {
  try {
    const { id } = req.params;
    const encontraSerie = await serieModel
  .findById(id);

    if (encontraSerie == null) {
      return res.status(404).json({ message: `Serie com o id ${id} não foi encontrada` })
    };
    await encontraSerie.remove();
    res.status(200).json({ message: `Serie com  id ${id} foi deletado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  encontraTodasAsSeries,
  encontraSeriePorId,
  adicionaNovaSerie,
  atualizaPorId,
  deletaSerie,
};