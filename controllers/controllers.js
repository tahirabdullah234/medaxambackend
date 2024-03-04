const formModel = require("../modal/form");

const getStatus = (req, res, next) => {
    console.log('hello')
  res.send({
    status: "ok",
  });
};

const createForm = async (req, res, next) => {
  try {
    console.log(req.body)
    if (!req.body.name || !req.body.email || !req.body.date) {
      return res.send({
        status: "Send all required fields",
      });
    }
    const book = await formModel.create({
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
    });
    return res.send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getStatus,
  createForm,
};
