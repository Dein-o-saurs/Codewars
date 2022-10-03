



function multiTable(number) {
    let str = ''
    for (let i = 1; i <= 10; i++) {
      str += `${i} * ${number} = ${i*number}${i !== 10 ? '\n' : ''}`
    }
    return str;
  }