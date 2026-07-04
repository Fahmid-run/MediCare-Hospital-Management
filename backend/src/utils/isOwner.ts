import { prisma } from '../lib/prisma';

export const isOwner = async (db:any,userId: any, databaseId: string) => {
  const result = await db.findUniqueOrThrow({
    where: {
      id:databaseId
    },
  });

  const isOwnerOfBug = userId === result;

  return isOwnerOfBug;
};



