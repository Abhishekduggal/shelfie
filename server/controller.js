const read = (req, res, next) => {
  const db = req.app.get("db");
  db.get_inventory()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const create = (req, res, next) => {
  console.log(req.body);
  let { name, description, price, url } = req.body;

  const db = req.app.get("db");
  db.create_product([name, description, price, url])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  read,
  create
};
