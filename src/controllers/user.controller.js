const db = require("../models/index.js");

const createUser = async (req, res) => {
  try {
    const newUser = await db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name === "" ? "" : req.body.name,
      mobile_phone: req.body.mobile_phone === "" ? "" : req.body.mobile_phone,
    });

    return res.status(201).json({
      data: newUser
    })
  }
  catch (error)
  {
    return res.status(500).json({ message: error.message });
  }
}

const getUser = async (req, res) => {
  try {
    const findUserById = await db.User.findOne({ where: { id: parseInt(req.params.id) } });

    if (findUserById)
    {
      return res.status(200).json({ data: findUserById.dataValues });
    }
    else throw new Error('User not found!')
  }
  catch (error)
  {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  getUser
}