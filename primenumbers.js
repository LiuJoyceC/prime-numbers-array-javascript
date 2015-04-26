//Part 1: Prime Array
//Creates array prime such that prime[n] = true if n is prime and false if n is not prime, 
//for n = 0, 1, 2,...specified max.

//getTime() used to measure the runtime to finish making the prime array

var starttime = new Date().getTime();

var prime = [];
var max = 1000000; //Specify max here.

for (var i = 0; i <= max; i++) {
    prime.push(true);
};

for (var num = 0; num <= Math.sqrt(max); num++) {
    
    if (num<2) {
        prime[num] = false;
    }
    else if (prime[num]) {
        for ( nonprime = Math.pow(num,2); nonprime <= max; nonprime+=num) {
            prime[nonprime] = false;
        };
    };
};

var endtime = new Date().getTime();

console.log("Runtime for creating prime array: " + (endtime - starttime) + " milliseconds");

//test cases
console.log(prime[8]); //false
console.log(prime[17]); //true
console.log(prime[29]); //true
console.log(prime[27]); //false
console.log(prime[6197]); //true
console.log(prime[999999]); //false
console.log(prime[1000000]); //false
console.log(prime[294859]); //true



//Part 2: Prime Factorization
//This function takes as input a number (less than or equal to the max specified in Part 1), 
//and returns an array with the prime factors. If the number is prime, 
//then the array will just have the number itself as its one element. 
//This function depends on the prime array created in Part 1.

var factorize = function (num) {
    var factors = [];
    if (prime[num]) {
        factors.push(num);
    }
    else {
        for (var i = 2; i <= num; i++) {
            while (prime[i], num % i === 0) {
                factors.push(i);
                num = num / i;
            };
        };
    };
    return factors;
};
