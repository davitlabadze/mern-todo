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
        throw new Error('Please add a text field')
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
    
    const todo = await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        { text: req.body.text }
        );

    
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

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}