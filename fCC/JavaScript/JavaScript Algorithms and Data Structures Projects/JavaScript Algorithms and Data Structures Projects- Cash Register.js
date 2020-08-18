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

  for (let bid = cid.length - 1; bid >= 0; bid--) {
    let bill = cid[bid];
    let amount = 0;
    let billAvailable = bill[1] * 100
    while (due >= value[bill[0]] && billAvailable >= value[bill[0]]) {
      billAvailable -= value[bill[0]];
      due -= value[bill[0]];
      amount += value[bill[0]];
    }
    if (billAvailable == 0) {
      answer.status = "CLOSED";
    } else {
      answer.status = "OPEN"
    };
    if (amount > 0) {
      answer.change.push([bill[0], amount / 100]);
    }
  }
  if (due > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  } else if (answer.status == "CLOSED") {
    answer.change = cid;
  }
  return answer;
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);