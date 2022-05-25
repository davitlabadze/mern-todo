const express = require('express');
const { getTodos, setTodo, updateTodo, deleteTodo, completeTodo } = require('../controllers/TodoController');
const router = express.Router();

router.route('/').get(getTodos).post(setTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)
router.route('/complete/:id').get(completeTodo)
module.exports = router