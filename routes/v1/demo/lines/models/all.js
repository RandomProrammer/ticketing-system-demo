const data = require('../../data.json');

module.exports = (req, res) => {
  const lineId = req.params.lineId * 1;
  const models = data.models.filter(c => c.lineId === lineId);

  res.status(200).json({ models });
};