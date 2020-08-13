const incrementBinaryFromExponent = require('../lib/incrementBinaryFromExponent')

describe('incrementBinaryFromExponent function', () => {


  test('it should add one if the exponent is one', () => {
    expect(incrementBinaryFromExponent(1, [1,0,0,1])).toEqual([1,0,1,0])
  })

  test('it should add two if the exponent is two', () => {
    expect(incrementBinaryFromExponent(2, [1,0,1,1])).toEqual([1,1,0,1])
  })

  test('it should add FOUR if the exponent is three', () => {
    expect(incrementBinaryFromExponent(3, [1,0,1,1])).toEqual([1,1,1,1])
  })



  test('it should increment (1) the binary number in the array', () => {
    expect(incrementBinaryFromExponent(1, [0])).toEqual([1])
    expect(incrementBinaryFromExponent(1, [1])).toEqual([1,0])
    expect(incrementBinaryFromExponent(1, [1,1,1,0,1,1,1,0])).toEqual([1,1,1,0,1,1,1,1])
    expect(incrementBinaryFromExponent(1, [1,1,1,0,1,1,1,1])).toEqual([1,1,1,1,0,0,0,0])
    expect(incrementBinaryFromExponent(1, [1,1,0,0,0,0,1])).toEqual([1,1,0,0,0,1,0])
    expect(incrementBinaryFromExponent(1, [1,0])).toEqual([1,1])
    expect(incrementBinaryFromExponent(1, [0,1])).toEqual([1,0])
    expect(incrementBinaryFromExponent(1, [1,0,1])).toEqual([1,1,0])
    expect(incrementBinaryFromExponent(1, [1,0,1,1])).toEqual([1,1,0,0])
    expect(incrementBinaryFromExponent(1, [1,0,1,0,0,1,1,1])).toEqual([1,0,1,0,1,0,0,0])
    expect(incrementBinaryFromExponent(1, [1,0,1,1,1,1,1,1])).toEqual([1,1,0,0,0,0,0,0])
  })


  test('it should add two to thethe binary number in the array', () => {
    expect(incrementBinaryFromExponent(2, [1,0])).toEqual([1,0,0])
    expect(incrementBinaryFromExponent(2, [1,1,1,0,1,1,1,0])).toEqual([1,1,1,1,0,0,0,0])
    expect(incrementBinaryFromExponent(2, [1,0,0,1])).toEqual([1,0,1,1])
    expect(incrementBinaryFromExponent(2, [1,1,1,0,1])).toEqual([1,1,1,1,1])
    expect(incrementBinaryFromExponent(2, [1,1,1,1,1])).toEqual([1,0,0,0,0,1])
    expect(incrementBinaryFromExponent(2, [1,0,1,1,1,1,1,1])).toEqual([1,1,0,0,0,0,0,1])
  })


  test('it should handle large binary numbers', () => {
    expect(incrementBinaryFromExponent(4, [
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
      0,0,0,0,0,0,0,0,0,1,1,1])
  })
})


