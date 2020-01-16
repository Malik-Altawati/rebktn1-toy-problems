/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/




function primeTester(n) {
    if (n <= 1) {
        return false
    }
    else if (n <= 3) {
        return true
    }
    else if (n % 2 === 0 || n % 3 === 0) {
        return false
    }
    var i = 5
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false
        }
        i = i + 6
    }
    return true
}