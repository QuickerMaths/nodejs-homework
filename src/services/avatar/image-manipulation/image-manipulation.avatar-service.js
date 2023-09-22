import Jimp from "jimp";

export default function imageManipulation(file) {
  Jimp.read(file.path)
    .then((image) => {
      return image
        .resize(250, 250)
        .write(
          `./public/avatars/${file.filename}.${file.mimetype.split("/")[1]}`
        );
    })
    .catch((err) => {
      throw new Error(err);
    });
}
