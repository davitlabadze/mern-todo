const express = require('express');
const { getTodos, setTodo, updateTodo, destroyTodo } = require('../controller/TodoController');
const router = express.Router();

router.route('/').get(getTodos).post(setTodo)
router.route('/:id').put(updateTodo).delete(destroyTodo)

module.exports = router