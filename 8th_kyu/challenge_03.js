//Given an array of integers your solution should find the smallest integer.


class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Math.min.apply(Math, args)
      return min
    }
  }