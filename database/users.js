const prisma = require('./prisma');

const saveUser = (user) => {
  return prisma.users.create({
    data: user,
  });
};

const findUserByEmail = (email) => {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
};
const findUserById = (id) => {
  return prisma.users.findFirst({
    where: {
      id,
    },
  });
};

module.exports = {
  saveUser,
  findUserByEmail,
  findUserById,
};
