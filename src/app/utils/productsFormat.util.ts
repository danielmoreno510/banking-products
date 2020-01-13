export const filterProducts = (products, filter) => {
  const productsFilter = products.reduce((prev, current) => {
    let exists = prev.find(x => x.typeAccount === current.typeAccount);
    if (!exists) {
      exists = { typeAccount: current.typeAccount, data: [] };
      prev.push(exists);
    }
    if (filter) {
      if (current != null && current.accountInformation.bank === 'BANCO_1') {
        exists.data.push(current);
      }
    } else {
      if (current != null) {
        exists.data.push(current);
      }
    }
    return prev;
  }, []);
  for (const product in productsFilter) {
    if (productsFilter[product]) {
      for (const item in productsFilter[product].data) {
        if (item === '0') {
          productsFilter[product].data[0].countTitle = productsFilter[product].data.length;
          productsFilter[product].data[0].showTitle = true;
        }
      }
    }
  }
  return productsFilter;
};
