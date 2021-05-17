import { getWebpThumbnail } from "lib/images";

test("should return webp", () => {
  expect(getWebpThumbnail("http://image/D_234-I.jpg")).toEqual("http://image/D_NQ_NP_234-W.webp");
});

test("should run when image is not in pattern", () => {
  expect(getWebpThumbnail("http://image/234.png")).toEqual("http://image/234.png");
});

test("should return full webp", () => {
  expect(getWebpThumbnail("http://image/D_234-I.jpg", "F")).toEqual("http://image/D_NQ_NP_234-F.webp");
});