const express = require('express');
const { getTodos, setTodo, updateTodo, deleteTodo } = require('../controllers/TodoController');
const router = express.Router();

router.route('/').get(getTodos).post(setTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)

module.exports = router