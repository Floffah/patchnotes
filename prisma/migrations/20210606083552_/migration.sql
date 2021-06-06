-- CreateTable
CREATE TABLE "PatchNote" (
    "id" SERIAL NOT NULL,
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "name" TEXT NOT NULL,

    PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "_PatchNoteToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PatchNoteToTag_AB_unique" ON "_PatchNoteToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PatchNoteToTag_B_index" ON "_PatchNoteToTag"("B");

-- AddForeignKey
ALTER TABLE "_PatchNoteToTag" ADD FOREIGN KEY ("A") REFERENCES "PatchNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatchNoteToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("name") ON DELETE CASCADE ON UPDATE CASCADE;
