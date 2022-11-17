const express = require('express');
const router = express.Router();
const { getTasksApi } = require('../controllers/task.js');
const { getHomeApi} = require('../app/views/home/Home');
router.get('/', getTasksApi);
router.get('/tasks',getHomeApi)