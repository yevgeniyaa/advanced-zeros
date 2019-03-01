module.exports = function getZerosCount(number, base) {
    let result = number;// finding the highest power of base which divides number!
    for (let p = 2; p <= base; ++p) {
        if (base % p === 0) { // if base is divisible by p, p is a prime factor
            let power = 0;
            while (base % p === 0) { // compute prime's power and get rid of all the prime factors
                power++;
                base /= p;
            }
            // next - do something with factor p^q:
            // for every factor p^q in the prime factorization in base:
            result = min(result, getMaxPowerOfPrimeInPower(p, power, number));
        }
        // proceed with next candidate divisor
    }
    return result;
};

const min = (x, y) => x < y ? x : y;

const getMaxPowerOfPrime = (prime, number) => {
    let mu = 0;
    while (number / prime > 0) {
        mu += Math.floor(number / prime);
        number = Math.floor(number / prime);
    }
    return mu;
};

const getMaxPowerOfPrimeInPower = (prime, power, number) => {
    return Math.floor(getMaxPowerOfPrime(prime, number) / power);
};
