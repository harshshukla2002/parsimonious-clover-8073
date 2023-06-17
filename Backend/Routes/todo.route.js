const express = require("express");
const { TodoModel } = require("../Models/todo.model");
const { Auth } = require("../Middleware/Auth");

const todoRouter = express.Router();

todoRouter.post("/create", Auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await TodoModel.create({ title, description, userId: req.body.userId });
    res.status(200).send({ msg: "Todo created successfully", todo });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.get("/", Auth, async (req, res) => {
  try {
    const todos = await TodoModel.find({ userId: req.body.userId });
    res.status(200).send({ todos });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.get("/:id", Auth, async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await TodoModel.findOne({ _id: todoId, userId: req.body.userId });
    if (todo) {
      res.status(200).send({ todo });
    } else {
      res.status(404).send({ msg: "Todo not found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.put("/:id", Auth, async (req, res) => {
  const todoId = req.params.id;
  const { title, description } = req.body;
  try {
    const updatedTodo = await TodoModel.findOneAndUpdate(
      { _id: todoId, userId: req.body.userId },
      { title, description },
      { new: true }
    );
    if (updatedTodo) {
      res.status(200).send({ msg: "Todo updated successfully", todo: updatedTodo });
    } else {
      res.status(404).send({ msg: "Todo not found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.delete("/:id", Auth, async (req, res) => {
  const todoId = req.params.id;
  try {
    const deletedTodo = await TodoModel.findOneAndDelete({ _id: todoId, userId: req.body.userId });
    if (deletedTodo) {
      res.status(200).send({ msg: "Todo deleted successfully", todo: deletedTodo });
    } else {
      res.status(404).send({ msg: "Todo not found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { todoRouter };

