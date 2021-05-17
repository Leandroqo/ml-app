import { formatCents, formatCurrency, getCurrencyString } from "lib/currency";

test("should return currency string as R$", () => {
  expect(getCurrencyString("BRL")).toEqual("R$ ");
});

test("should return currency string as $", () => {
  expect(getCurrencyString("ARS")).toEqual("$ ");
});

test("should return currency string as U$S", () => {
  expect(getCurrencyString("USD")).toEqual("U$S ");
});

test("should return currency string as $", () => {
  expect(getCurrencyString()).toEqual("$ ");
});

test("should return currency", () => {
  expect(formatCurrency(1000)).toEqual("1.000");
});

test("should return currency when do not have", () => {
  expect(formatCurrency()).toEqual("0");
});

test("should return cents", () => {
  expect(formatCents(0.03)).toEqual("03");
});

test("should return cents when do not have", () => {
  expect(formatCents(0)).toEqual("00");
});
