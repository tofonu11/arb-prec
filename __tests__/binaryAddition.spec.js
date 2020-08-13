const nextBinaryNumber = require('../lib/nextBinaryNumber.js')

describe('nextBinaryNumnber function', () => {

  test('it should should return a longer array with a one and all zeros when given all ones', () => {
    expect(nextBinaryNumber([1,1,1,1,1]))
      .toEqual([1,0,0,0,0,0])
  })

  test('it should increment the binary number in the array', () => {
    expect(nextBinaryNumber([0])).toEqual([1])
    expect(nextBinaryNumber([1])).toEqual([1,0])
    expect(nextBinaryNumber([1,1,1,0,1,1,1,0])).toEqual([1,1,1,0,1,1,1,1])
    expect(nextBinaryNumber([1,1,1,0,1,1,1,1])).toEqual([1,1,1,1,0,0,0,0])
    expect(nextBinaryNumber([1,1,0,0,0,0,1])).toEqual([1,1,0,0,0,1,0])
    expect(nextBinaryNumber([1,0])).toEqual([1,1])
    expect(nextBinaryNumber([0,1])).toEqual([1,0])
    expect(nextBinaryNumber([1,0,1])).toEqual([1,1,0])
    expect(nextBinaryNumber([1,0,1,1])).toEqual([1,1,0,0])
    expect(nextBinaryNumber([1,0,1,0,0,1,1,1])).toEqual([1,0,1,0,1,0,0,0])
    expect(nextBinaryNumber([1,0,1,1,1,1,1,1])).toEqual([1,1,0,0,0,0,0,0])
  })

  test('it should handle large binary numbers', () => {
    expect(nextBinaryNumber([
      1,0,0,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1]))
    .toEqual([
      1,0,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0])
  })
})


