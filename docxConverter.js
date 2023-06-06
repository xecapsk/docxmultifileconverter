const mammoth = require("mammoth");
const fs = require("fs");

const removeImgAndATags = (result) => {
  return result
    .replace(/<img[^>"']*((("[^"]*")|('[^']*'))[^"'>]*)*>/g, "")
    .replace(/<a\b[^>]*>/gm, "")
    .replace(/<\/a>/gm, "");
};

const convertToHTML = (source, file, destination) => {
  mammoth
    .convertToHtml({ path: source + "\\" + file })
    .then((result) => {
      const data = removeImgAndATags(result.value);
      //   console.log(result.messages);
      fs.writeFile(
        destination + "\\" + file.replace(/\.[^/.]+$/, ".html"),
        data,
        (err) => {
          if (err) console.log(err);
        }
      );
    })
    .catch((err) => console.error(err));
};

const convert = function convert(source, destination) {
  if (!fs.existsSync(source)) {
    console.error("Could not find source folder.");
  } else {
    if (!fs.existsSync(destination)) {
      // console.warn("could not find destination folder, trying to create it.");
      fs.mkdir(destination, (err) => {
        if (err) {
          return console.error(err);
        } else {
          // console.log("Destination folder created.");
        }
      });
    }
    fs.readdir(source, (err, files) => {
      if (err) console.error(err);
      else {
        files.forEach((file) => {
          if (file.includes(".docx")) {
            convertToHTML(source, file, destination);
          }
        });
      }
    });
  }
  console.log("Files converted succesfully");
};

module.exports.convert = convert;
