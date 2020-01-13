export const amountFormat = (amount) => {
  amount=String(amount)
  amount=amount.replace(".", ",")
  var find = amount.indexOf(",");
  find<0 ? amount=amount+",00" : amount
  var newAmount = "";
  for (var i=amount.length; i--;) {
    newAmount += amount[i];
  }
  amount= ""
  for (var j=0; j<newAmount.length; j++) {
    amount += newAmount[j];
    if(j==5 && newAmount[j+1] && newAmount[j+1]!="-"){
      amount += "."
    }
    if(j==8 && newAmount[j+1] && newAmount[j+1]!="-"){
      amount += "."
    }
  }
  newAmount = "";
  for (var i=amount.length; i--;) {
    newAmount += amount[i];
  }
  newAmount="$"+newAmount
  
  return newAmount
}