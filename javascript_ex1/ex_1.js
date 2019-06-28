const fizz_buzz = function(iteration) {
  for (let i = 0; i < iteration; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz " + i);
    } else if (i % 3 === 0) {
      console.log("Fizz " + i);
    } else if (i % 5 === 0) {
      console.log("Buzz " + i);
    }
  }
};

fizz_buzz(100);
