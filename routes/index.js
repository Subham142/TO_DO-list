//import express
const express = require('express');

//Use router function
const router = express.Router();

//import controller file
const todoController = require('../controllers/todo_controller');

console.log('router loaded');
// router for home page
router.get('/',todoController.todo);

//router for adding task
router.post('/create-task',todoController.add);

//router for deleting task
router.post('/delete-task',todoController.delete);

module.exports = router;