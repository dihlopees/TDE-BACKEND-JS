const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'Running',
  });
});

let tasks = [
  {
    id: 1,
    name: 'Comprar leite',
    description: 'Ir no mercado da esquina e comprar leite',
    isDone: false,
  },
  {
    id: 2,
    name: 'Comprar pão',
    description: 'Ir no mercado da esquina e comprar pão',
    isDone: false,
  },
];

app.get('/tasks', (req, res) => {
  res.json({
    tasks: tasks,
  });
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    name: req.body.name,
    description: req.body.description,
    isDone: req.body.isDone,
  };
  tasks.push(newTask);

  res.json({
    tasks: {
      res: 'Tarefa criada com sucesso',
      task: newTask,
    },
  });
});

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((it) => it.id === id);

  if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });

  task.name = req.body.name;
  task.description = req.body.description;
  task.isDone = req.body.isDone;

  res.json({
    res: 'Tarefa atualizada com sucesso',
    task: task,
  });
});

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((it) => it.id != id);

  res.json({
    res: 'Tarefa deletada com sucesso',
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
