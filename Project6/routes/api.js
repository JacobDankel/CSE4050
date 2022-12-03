const express = require('express');
const router = express.Router();

const {
    getTasks,
    getTaskTypes,
} = require('../app/controllers/task.js');

const {
    getUsersApi,
    login,
    checkLogin
} = require('../app/controller/user.js');

router.get('/tasks', getTasks);
router.get('/task-types', getTaskTypes);

router.get('/users', getUsersApi);
router.get('/admin/login', login);

module.exports = router;