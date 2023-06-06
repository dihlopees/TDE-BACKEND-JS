const { PrismaClient } = require('@prisma/client');

const prismaConnection = new PrismaClient();
module.exports = prismaConnection;
