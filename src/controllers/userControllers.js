const { database, users } = require("../../database");

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);

  database
    .query("SELECT * FROM users WHERE id = ?", [userId])
    .then(([usersFromDb]) => {
      if (usersFromDb.length > 0) {
        res.status(200).json(usersFromDb[0]);
      } else {
        res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getUsers,
  getUserById,
};
