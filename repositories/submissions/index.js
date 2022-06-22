import prisma from "../db";

/*-----------------------------------------------------------------------------------------
 Public API
-----------------------------------------------------------------------------------------*/

const submissionsRepo = {
  all: async () => await prisma.submission.findMany(),
  allRanked,
  count: async () => await prisma.submission.count(),
  create,
  updateName,
};

async function allRanked () {
  return await prisma.submission.findMany({
    orderBy: [
      {
        score: "desc"
      },
      {
        createdAt: "desc"
      }
    ]
  });
}

async function create (score, name = null) {
  return await prisma.submission.create({
    data: {
      name,
      score
    }
  });
}

async function updateName (id, name) {
  const result = await prisma.submission.update({
    where: { id },
    data: { name },
  });

  return result;
}

export default submissionsRepo;