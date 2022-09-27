import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
  //Create user
  const adduser = await prisma.user.create({
    data: {
      name: "Mayuresh",
      address: "Pune",
      email: "mayuresh@123@gmail.com",
      rollno: 101,
    },
  });
  console.log("User Created Successfully", adduser);

  //Retrieve users
  const users = await prisma.user.findMany();
  console.log("All Users Retrieved Successfully : ", users);

  //Update user
  const updateUser = await prisma.user.update({
    where: {
      email: "mayuresh@123@gmail.com",
    },
    data: {
      //name: "Mayur",
      address: "Mumbai",
    },
  });
  console.log("User Updated Successsfully : ", updateUser);

  //Delete user
  const deleteUser = await prisma.user.delete({
    where: {
      email: "mayuresh@123@gmail.com",
    },
  });
  console.log("User Deleted Successfully : ", deleteUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
