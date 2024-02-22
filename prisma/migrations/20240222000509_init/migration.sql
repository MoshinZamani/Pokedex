/*
  Warnings:

  - You are about to alter the column `base_stat` on the `Stat` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "base_stat" INTEGER NOT NULL,
    "stat_name" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    CONSTRAINT "Stat_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Stat" ("base_stat", "id", "pokemonId", "stat_name") SELECT "base_stat", "id", "pokemonId", "stat_name" FROM "Stat";
DROP TABLE "Stat";
ALTER TABLE "new_Stat" RENAME TO "Stat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
