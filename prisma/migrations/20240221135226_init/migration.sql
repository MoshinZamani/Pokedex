-- CreateTable
CREATE TABLE "Ability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "is_hidden" BOOLEAN NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    CONSTRAINT "Ability_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
