/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    var result = 0
    for (var i = 0; i <= n; i++) {
        if (isPrime(i)) {
            result += i
        }
    }
    return result
}
///////////////////////////////////////// is prime function divides the number on all smaller numbers
//////////////////////////////////////// and if the result is 0 then its not prime 
////////////////////////// after the loop , if the num was greater than one then its prime , else , Its not
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;
}