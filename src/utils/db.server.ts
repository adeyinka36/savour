const { PrismaClient } = require('@prisma/client')

let db: PrismaClient;

declare global {
    let  __db: PrismaClient | undefined;
}

if(!global.__db){
    global.__db = new PrismaClient();
}

db = global.__db;

export {db}