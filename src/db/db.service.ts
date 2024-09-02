import { PrismaClient } from '@prisma/client';

export { Prisma as DbTypes, $Enums } from '@prisma/client';
export * from '@prisma/client';

export const db = new PrismaClient({
  //log: ['query', 'info', 'warn'],
  // errorFormat: 'pretty',
});
db.$connect();
