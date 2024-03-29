// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true



function validParentheses(s) {

    if (s.length % 2 !== 0) return false;
    
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(')')
      }  else if (s[i] === '[') {
        stack.push(']')
      } else if (s[i] === '{') {
        stack.push('}')
      } else if (stack.pop() !== s[i]) {
        return false;
      }
    }
    return !stack.length
  }