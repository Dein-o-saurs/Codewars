// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let xLen = 0;
    let oLen = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() == 'x') {
        xLen++
      }
      if (str[i].toLowerCase() == 'o') {
        oLen++
      }
    }
    return (xLen === 0 && oLen === 0) ? true : (xLen === oLen) 
  }