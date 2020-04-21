a=0
function isPrime(n) {
    for (var i=2; i<n; i++) {
      if (n%i === 0)
        return false;
    }
    return true;
  }
  
  for (var p=3; p<=7; p++) {
    if (isPrime(p))
    
      a=a+1;
  }
  console.log("countPrime(3, 7) =>",a);
