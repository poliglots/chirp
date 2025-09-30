const currencyList = ['USD', 'EUR', 'INR'];

exports.checkCurrency = (code) => {
  return currencyList.includes(code.toUpperCase());
};
