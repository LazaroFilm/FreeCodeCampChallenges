function checkCashRegister(price, cash, cid) {
  const value = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  }
  let due = cash * 100 - price * 100;
  let answer = {
    status: null,
    change: []
  };
  console.log("due: "+due);
  for (let bid = cid.length - 1; bid >= 0; bid--) {
    let bill = cid[bid];
    let amount = 0;
    let billAvailable = bill[1]*100
    // console.log("bill: ", bill);
    // console.log("value: "+value[bill[0]]);
    // console.log("billAvailable: "+billAvailable);
    while (due >= value[bill[0]] && billAvailable >= value[bill[0]]) {
      // console.log("giving " + value[bill[0]]);
      billAvailable -= value[bill[0]];
      due -= value[bill[0]];
      // console.log("amount before " + amount);
      amount += value[bill[0]];
      // console.log("due " + due)
      // console.log("amount " + amount)
    }
    answer.change.push([bill[0], amount/100]);
    // console.log("due " + due);
    console.log(answer);
    console.log("next");
  }
  // console.log("DONE: ");
  return answer;
}

console.log(
  checkCashRegister(19.49, 200, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);