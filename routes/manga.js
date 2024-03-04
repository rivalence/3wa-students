import express from "express";

const mangaRouter = express.Router();

const mangas = [
  { id: 1, title: "One Piece", topic: "Shonen" },
  { id: 2, title: "SNK", topic: "Shonen" },
  { id: 3, title: "Solo Leveling", topic: "action-fantaisy" },
];

mangaRouter.get("/", (req, res) => {
  res.json(mangas);
});

mangaRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const manga = mangas.find((manga) => manga.id === parseInt(id));
  res.json(manga);
});

mangaRouter.post("/", (req, res) => {
  const { title, topic } = req.body;
  const newManga = { id: mangas[mangas.length - 1].id + 1, title, topic };
  mangas.push(newManga);
  res.json(newManga);
});

mangaRouter.put("/:id", (req, res) => {
  const { title, topic } = req.body;
  const { id } = req.params;
  const mangaUpdt = mangas.find((manga) => parseInt(id) === manga.id);
  mangaUpdt.title = title;
  mangaUpdt.topic = topic;
  res.json(mangaUpdt);
});

mangaRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const indexToDel = mangas.indexOf(
    mangas.find((manga) => manga.id === parseInt(id))
  );
  mangas.splice(indexToDel, 1);
  res.json(mangas);
});

export default mangaRouter;
