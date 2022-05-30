function multiply(num1) {
    // Write your code here...
    return function double(num2){
        return num2*num1
    }
  }

  const double=multiply(2)(5);
  console.log(double)