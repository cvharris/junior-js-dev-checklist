const {isDate} = require('lodash')

describe('Basics', () => {
  /**
   * Most of these tests are very basic
   * But there are many ways to solve them
   * After you write the first solution, write more
   * To do so, copy the `expect...` lines and change the variables
   * Some tests do this already, they have different `FIXME`s
   */

  it('Declare a variable, any variable', () => {
    /**
     * 'declare', 'define', 'create'...these all mean the same thing
     */

    // FIXME: create a variable
    expect(myVar).toBeDefined()

    // FIXME: define a variable a different way
    expect(myLet).toBeDefined()

    // FIXME: define a variable a third different way
    expect(myConst).toBeDefined()
  })

  it('Create a new string', () => {
    // FIXME: create a string

    expect(typeof result).toBe('string')
  })

  it('Create a new number', () => {
    // FIXME: create a number
    expect(typeof result).toBe('number')
  })

  it('Create a new boolean', () => {
    // FIXME: create a boolean
    expect(typeof result).toBe('boolean')
  })

  it('Set the value of a variable to be null', () => {
    // Otherwise known as 'nullifying'
    // FIXME: create a variable with a nullable value

    expect(result).toBeNull()
  })

  it('Create a new Date', () => {
    // FIXME: create a date

    expect(isDate(result)).toBe(true)
  })

  it('Creates an object', () => {
    // FIXME: create an object

    expect(result).toBe()
  })

  it('Split a sentence into words', () => {
    const sentence = 'The quick brown fox jumped over the lazy dog'

    // FIXME: split the sentence into words

    expect(words).toHaveLength(9)
    expect(words[8]).toBe('dog')
  })

  it('Split a path into segments', () => {
    const path = 'Users/bird/Sites/github-hacks/src'

    // FIXME: split the path into its segments

    expect(segments).toHaveLength(5)
    expect(segments[0]).toBe('Users')
  })

  it('Concatenate two strings', () => {
    const string1 = 'bird'
    const string2 = 'dog'

    // FIXME: concatenate the strings

    expect(concatenated).toBe('birddog')
  })

  it('Join two strings with a comma and space in between', () => {
    const string1 = 'bird'
    const string2 = 'dog'

    // FIXME: join the strings with a comman and space separating them

    expect(concatenated).toBe('bird, dog')
  })

  it('Multiply two numbers', () => {
    const num1 = 2
    const num2 = 4

    // FIXME: multiply the two numbers

    expect(multiplied).toBe(8)
  })

})