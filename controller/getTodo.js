const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      messsage: "data is fetched",
    });
  } catch (error) {
    res.status(500).json({
      message: "data is not fetched",
      success: false,
      data: "internal server error ",
    });
  }
};

