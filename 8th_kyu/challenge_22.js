//Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    
    let rev = x.split("").reverse().join("").toLowerCase()
    if (rev === x.toLowerCase()) {
      return true 
    } else {
      return false
    }
  }