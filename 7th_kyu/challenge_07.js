function sumDigits(number) {
    let sum = 0;
    let numArr = Math.abs(number).toString().split('');

    numArr.forEach(num => {
        sum += parseInt(num)
    })
    return sum;
  }
  