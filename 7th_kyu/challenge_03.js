
// You are going to be given a word. Your job is to return the 
// middle character of the word. If the word's length is odd, 
// return the middle character. If the word's length is even, 
// return the middle 2 characters.

function getMiddle(s) {
    let middle = s.length / 2;
    if (s.length % 2 === 0) {
      return s.slice(middle-1, middle+1)
    } else {
      return s.charAt(middle)
    }
  }