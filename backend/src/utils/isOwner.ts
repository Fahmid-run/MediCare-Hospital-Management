import { prisma } from '../lib/prisma';

export const isOwner = async (db:any,userId: any, targetId: string) => {
  const result = await db.findUniqueOrThrow({
    where: {
      id:targetId
    },
  });

  const isowner = userId === result.patientId;

  return isowner;
};



