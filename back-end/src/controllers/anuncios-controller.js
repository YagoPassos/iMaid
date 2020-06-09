const mongoose = require('mongoose');
const Anuncios = mongoose.model('Anuncios');

// list
exports.listAnuncios = async (req, res) => {
  try {
    const data = await Anuncios.find({}, 'titulo anuncio valor registro');
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os anúncios!'});
  }
};

// create
exports.createAnuncio = async (req, res) => {
  try {
    const anuncio = new Anuncios({
      titulo: req.body.titulo,
      anuncio: req.body.anuncio,
      valor: req.body.valor
    });

    console.log(anuncio)

    await anuncio.save();

    res.status(201).send({message: 'Anúncio inserido com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao inserir o anúncio.'});
  }
};