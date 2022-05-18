const Todo = require("../models/Todo")

/**
 * @desc    Get todos
 * @router  GET /api/todos
 * @access  Public
 */

const getTodos = async (req,res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
}

/**
 * @desc    Set todo
 * @router  POST /api/todos
 * @access  Public
 */

const setTodo = async (req,res) => {
    if(!req.body.text){
        res.status(400)
    }

    const todo = await Todo.create({
        text: req.body.text,
    })
    res.status(200).json(todo)
}

/**
 * @desc    Update todo
 * @router  PUT /api/todos/:id
 * @access  Public
 */

const updateTodo = async (req,res) => {
    const todo = await Todo.findById(req.params.id);
    todo.save()
    res.status(200).json(todo)
}

/**
 * @desc    Delete todo
 * @router  DELETE /api/todos/:id
 * @access  Public
 */

const deleteTodo = async (req,res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(result)
}
