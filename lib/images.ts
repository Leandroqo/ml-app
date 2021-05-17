export const getWebpThumbnail = (thumbnail = "", type = "W") => {
  const [image, ...rest] = thumbnail.split('/').reverse();

  const newImage = image
    .replace("D_", "D_NQ_NP_")
    .replace("-I.jpg", `-${type}.webp`);

  return `${rest.reverse().join("/")}/${newImage}`
}