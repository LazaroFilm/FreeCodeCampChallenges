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
      let bill = cid[bid]; //name and value of the current bill
      let amount = 0; //amount due for the current bill
      let billAvailable = bill[1] * 100 //amount available in the drawer for the current bill

      while (due >= value[bill[0]] && billAvailable >= value[bill[0]]) {
        // console.log("giving " + value[bill[0]]);
        billAvailable -= value[bill[0]];
        due -= value[bill[0]];
        // console.log("amount before " + amount);
        amount += value[bill[0]];
        // console.log("due " + due)
        // console.log("amount " + amount)
      }
      if (billAvailable == 0) {
        // console.log("no more bills");
        answer.status = "CLOSED"
      } else {
        answer.status = "OPEN"
      };
      answer.change.push([bill[0], amount / 100]);
      // console.log("due " + due);
      // console.log(answer);
      // console.log("next");
    }
    // console.log("DONE: ");
    if (due > 0) {
      // console.log("Not enough dough");
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    } else {
      return answer;
    }
  };
  
  console.log(
    checkCashRegister(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ])
  );