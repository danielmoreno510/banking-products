export const amountFormat = (amount) => {
  amount = String(amount);
  amount = amount.replace('.', ',');
  const find = amount.indexOf(',');
  if (find < 0) { amount = amount + ',00'; }
  let newAmount = '';
  for (let i = amount.length; i--;) {
    newAmount += amount[i];
  }
  amount = '';
  for (let j = 0; j < newAmount.length; j++) {
    amount += newAmount[j];
    if (j === 5 && newAmount[j + 1] && newAmount[j + 1] !== '-') {
      amount += '.';
    }
    if (j === 8 && newAmount[j + 1] && newAmount[j + 1] !== '-') {
      amount += '.';
    }
  }
  newAmount = '';
  for (let i = amount.length; i--;) {
    newAmount += amount[i];
  }
  newAmount = '$' + newAmount;

  return newAmount;
};
