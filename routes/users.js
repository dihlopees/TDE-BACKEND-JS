const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {
  saveUser,
  findUserByEmail,
} = require('../database/users');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (user) return res.status(401).send();

  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: passwordHash,
  };

  await saveUser(newUser);
  res.status(201).send();
});

module.exports = {
  router,
};

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await findUserByEmail(email);
  if (!user) return res.status(401).send();

  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword) res.status(401).send();

  const token = jwt.sign(
    { userId: user.id, name: user.name },
    process.env.SECRET
  );

  res.json({
    success: true,
    token,
  });
});
