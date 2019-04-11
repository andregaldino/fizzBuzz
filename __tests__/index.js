import FizzBuzz from '../src'
import mock from '../src/mock'

describe('must test multiple of 3 or 5', () => {
  test('when input is 3 must return fizz', () => {
    const fizz = new FizzBuzz()
    const result = fizz.run(3)
    expect(result).toBe('Fizz')
  })

  test('when input is 5 must return Buzz', () => {
    const fizz = new FizzBuzz()
    const result = fizz.run(5)
    expect(result).toBe('Buzz')
  })

  test('when input is 15 must return FizzBuzz', () => {
    const fizz = new FizzBuzz()
    const result = fizz.run(15)
    expect(result).toBe('FizzBuzz')
  })

  test('when input is not multiple of 3 or 5 must return same number', () => {
    const fizz = new FizzBuzz()
    const result = fizz.run(8)
    expect(result).toBe(8)
  })

  test('fizz buzz from 1 to 1000', () => {
    const fizz = new FizzBuzz()
    const result = {}
    for (let index = 1; index <= 1000; index++) {
      result[index] = fizz.run(index)
    }

    expect(result).toEqual(mock)
  })
})
