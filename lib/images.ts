export const getWebpThumbnail = (thumbnail = "") => {
  const [image, ...rest] = thumbnail.split('/').reverse();

  const newImage = image
    .replace("D_", "D_NQ_NP_")
    .replace("-I.jpg", "-W.webp");

  return `${rest.reverse().join("/")}/${newImage}`
}