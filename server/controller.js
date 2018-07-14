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

const update = (req, res, next) => {
  let { id } = req.params;
  console.log(id);
  //   let { id } = req.params;
  let { name, description, price, image_url } = req.body;

  const db = req.app.get("db");
  db.update_product([id, name, description, price, image_url])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const deleteID = (req, res, next) => {
  let { id } = req.params;
  //   console.log(id);
  const db = req.app.get("db");
  db.delete_product(id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const getOne = (req, res) => {
  let { id } = req.params;
  const db = req.app.get("db");

  db.get_one(id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  read,
  create,
  deleteID,
  update,
  getOne
};
