export const formatCurrency = (price = 0) => {
  const [currency] = price.toString().split('.');
  return currency.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export const formatCents = (price = 0) => {
  const [, cents] = price.toString().split('.');
  return cents ? (cents.length === 1 ? `${cents}0` : cents) : "00";
}

export const getCurrencyString = (id = "") => {
  const types: { [k: string]: string } = {
    "BRL": "R$ ",
    "ARS": "$ ",
    "USD": "U$S "
  }

  return types[id] || "$ ";
}