module.exports = function solveEquation(equation) {
  let arr = equation.split(" ");
  let copyArr = [];
  let a = parseInt(arr[0]); 
  let b = parseInt(arr[4]);
  let c = parseInt(arr[8]);
  let x1, x2;

    if(arr[3] == "-"){
      b = -b;
    }

    if(arr[7] == "-"){
      c = -c;
    }

    let discrim = Math.sqrt(b * b - 4 * a * c);

    if (discrim > 0) {
      x1 = Math.round((-b - discrim) / (a * 2)); 
      x2 = Math.round((-b + discrim) / (a * 2));
      copyArr.push(x1);
      copyArr.push(x2);
    }else if(discrim == 0) {
      x1 = Math.round(-(b/(2*a)));
      copyArr.push(x1);
    }

    let sorted = copyArr.sort((a,b) => a - b );
    
  return sorted;
  
}


