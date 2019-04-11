import FizzBuzz from '../src'
describe('fizzBuzz', () => {
    test('when input is 3 must return fizz', () => {
        const fizz = new FizzBuzz()
        const result = fizz.run(3)
        expect(result).toBe('Fizz')
    })
})
