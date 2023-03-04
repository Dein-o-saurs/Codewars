// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

// The Cat In The Hat is 2,000,000 cat units tall.

// Each cat is 2.5 times bigger than the cat underneath their hat.

// Find the total height of the cats if they are standing on top of one another.

// Counting starts from the Cat In The Hat

// n = the number of cats

// fix to 3 decimal places.


function height(n) {
    let count = 2000000;
    let current = 0;
    for (let i = 1; i <= n; i++) {
      
      count = count / 2.5;
      current = current + count;
    }
    current = current + 2000000
    return current.toFixed(3);
  }
  