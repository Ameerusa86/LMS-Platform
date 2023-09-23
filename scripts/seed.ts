const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Next JS" },
        { name: "React JS" },
        { name: "Angular" },
        { name: "HTML CSS JS" },
        { name: "Tailwindcss" },
        { name: "Shadcn-UI" },
        { name: "ASP.NET" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
