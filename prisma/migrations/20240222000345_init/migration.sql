-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    CONSTRAINT "Type_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "base_stat" TEXT NOT NULL,
    "stat_name" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    CONSTRAINT "Stat_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
