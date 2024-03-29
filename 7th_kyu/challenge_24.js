// Write a function which takes a list of strings and returns each 
// line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the 
// colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]



let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)