// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.




var isAnagram = function(test, original) {
    let first = test.toLowerCase().split('').sort().join('');
    let second = original.toLowerCase().split('').sort().join('');
    
    return first === second
  };
  