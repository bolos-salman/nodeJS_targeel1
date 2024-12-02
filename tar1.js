const num = 30;

//C
Number(
  (num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0) ||
    (num % 3 === 0 && num % 2 !== 0 && num % 5 !== 0) ||
    (num % 5 === 0 && num % 3 !== 0 && num % 5 !== 0)
) && console.log("1");

//B
Number(
  (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) ||
    (num % 3 === 0 && num % 5 === 0 && num % 2 !== 0) ||
    (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0)
) && console.log("2");

//C
Number(num % 2 == 0 && num % 3 == 0 && num % 5 == 0) && console.log("3");
