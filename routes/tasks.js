const express = require('express');
const router = express.Router();
const tasksDatabase = require('../database/tasks');

router.get('/tasks', async (req, res) => {
  const tasks = await tasksDatabase.getAllTasks();
  res.json({
    tasks,
  });
});

router.get('/tasks/:id', async (req, res) => {
  const id = Number(req.params.id);
  const tasks = await tasksDatabase.getOneTask(id);
  res.json({
    tasks,
  });
});

router.post('/tasks', async (req, res) => {
  const newTask = {
    name: req.body.name,
    description: req.body.description,
    isDone: req.body.isDone,
  };
  await tasksDatabase.saveTasks(newTask);

  res.json({
    tasks: {
      res: 'Tarefa criada com sucesso',
      task: newTask,
    },
  });
});

router.put('/tasks/:id', async (req, res) => {
  const id = Number(req.params.id);
  const task = await tasksDatabase.getOneTask(id);

  if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });

  taskToUpdate = {
    name: req.body.name,
    description: req.body.description,
    isDone: req.body.isDone,
  };

  await tasksDatabase.updateTask(id, taskToUpdate);
  res.json({
    res: 'Tarefa atualizada com sucesso',
    task: taskToUpdate,
  });
});

router.delete('/tasks/:id', async (req, res) => {
  const id = Number(req.params.id);
  await tasksDatabase.deleteTask(id);

  res.json({
    res: 'Tarefa deletada com sucesso',
  });
});

module.exports = {
  router,
};
