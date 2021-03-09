const data = require('../data.json');

module.exports = (req, res) => {
  const lines = data.lines;

  res.status(200).json({ lines });
};