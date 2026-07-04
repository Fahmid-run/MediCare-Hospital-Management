export const check =async (db:any,id:string) => {
  

  const result = await db.findUniqueOrThrow({
    where: {
      id
    },
  });

  return result
}