
let arr = [5, 7, 12, 6, 9, 9, 4, 11, 4, 7];
let personal = 2;

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc, current) => acc + current, 0);
    let average = sum / classPoints.length;
    if (yourPoints > average) {
      return true
      
    } else {
      return false
    }
  }

  betterThanAverage(arr, personal);
  