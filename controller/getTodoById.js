const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
  try {
    // extract  todo item on the basis of ID

    const id = req.params.id;
    const todo = await Todo.findById({
      _id: id,
    });

    //if given id not found

    if (!todo) {
      return res.send(404).json({
        success: false,
        message: "no data found with given id",
      });
    }

    //if id found
    res.status(200).json({
      success: true,
      message: ` data found with id ${id} `,
      data: todo,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: "Entry unsuccessfully",
    });
  }
};
