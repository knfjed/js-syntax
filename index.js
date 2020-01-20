// var test = 0;
// let test1 = 0;
// const test2 = 0;

for (let i = 1; i <= 100; i++) {
  let print = "";
  if (i % 15 === 0) print = "fizzbazz";
  else if (i % 3 === 0) print = "fizz";
  else if (i % 5 === 0) print = "bazz";
  else print = i;

  console.log(print);
}

const arrayList = ["item", "item1", "item2", "item3", "item4", "item5"];
for (const item of arrayList) {
  if (item.includes("1")) {
    console.log(item);
  }
}
