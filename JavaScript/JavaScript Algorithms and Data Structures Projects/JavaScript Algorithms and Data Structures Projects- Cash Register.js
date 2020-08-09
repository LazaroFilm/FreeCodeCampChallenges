function checkCashRegister(price, cash, cid) {
  var change;
  return "hello world!";
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]));

//take price - cash = due
//then look into cid (cash in drawer) and see how to return the change due. 
//start with the biggest bills and go down. 
//if we run out of large bills, go to smaller ones
//at the end check how much left in cid. if we have the exact change or more -> status closed
//if we are too short to return the change -> status open 