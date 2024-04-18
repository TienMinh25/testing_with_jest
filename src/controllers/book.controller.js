const db = require("../models/index.js");

const createBook = async (req, res) => {
  try {
    const newBook = await db.Book.create({
      name: req.body.name,
      title: req.body.title,
      user_id: parseInt(req.params.user_id)
    });

    return res.status(201).json({
      data: newBook
    })
  }
  catch (error)
  {
    return res.status(500).json({ message: error.message });
  }
}

const getBook = async (req, res) => {
  try {
    let findBookOfUser;
    if (isNaN(parseInt(req.params.user_id))) 
      throw new Error('Vui lòng truyển đúng số');
    else findBookOfUser = await db.Book.findAll({ where: { user_id: parseInt(req.params.user_id) } });

    return res.status(200).json({ data: findBookOfUser });
  }
  catch (error)
  {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createBook, getBook
}