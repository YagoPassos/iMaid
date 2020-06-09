const mongoose = require('mongoose');
const Users = mongoose.model('Users');

exports.createUsers = async (req, res) => {
  try {
    const user = new Users({
      user: req.body.user,
      password: req.body.password,
      email: req.body.email,
      city: req.body.city,
      uf: req.body.uf,
    });
    console.log(user)

    await user.save();

    res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao cadastrar o Usuário.' });
  }
}

exports.listUsers = async (req, res) => {
  try {
    const data = await Users.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: 'Falha ao carregar usuário.' });
  }
};