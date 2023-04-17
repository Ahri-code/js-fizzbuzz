// --- CONSTANTS --- (Nof for console log)

// const fizz = "Fizz"
// const buzz = "Buzz"

// --- VARIABLES ---

let i;

// --- CYCLE ---

for (i = 1; i <= 100; i++) {
    
    // Conditions
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    }

    console.log(i);
}