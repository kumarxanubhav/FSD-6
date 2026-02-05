function myFunction() {
  console.log("Starting a task...");
  //simulate a long running TextTrackList(blocking)
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    //a big loop
    sum += 1;
  }
  console.log("Task finished");
  return sum;
}

console.log("Before the function call");
let result = myFunction();
console.log("After the function call");
console.log("Result: ", result);
