const prismaConnection = require('./prisma');

const saveTasks = (tasks) => {
  return prismaConnection.tasks.create({
    data: tasks,
  });
};

const getAllTasks = () => {
  return prismaConnection.tasks.findMany();
};

const getOneTask = (id) => {
  return prismaConnection.tasks.findFirst({
    where: { id: id },
  });
};

const updateTask = (id, task) => {
  return prismaConnection.tasks.update({
    where: { id },
    data: task,
  });
};

const deleteTask = (id) => {
  return prismaConnection.tasks.delete({
    where: { id },
  });
};

module.exports = {
  saveTasks,
  getAllTasks,
  getOneTask,
  updateTask,
  deleteTask,
};
