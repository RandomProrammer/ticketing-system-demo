const data = require('../data.json');

module.exports = (req, res) => {
  const line = req.line;

  res.status(200).json({ line });
};