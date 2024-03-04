import fs from "fs";

fs.writeFile("file.txt", "Contenu du fichier", function (err) {});

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
