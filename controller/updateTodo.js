const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: Todo,
      message: "Todo updated ",
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal error",
      message: "Todo not updated ",
    });
  }
};
