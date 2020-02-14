describe('Lists', () => {
  // When creating applications, you will almost always deal with lists of data
  // Doing common list manipulations are necessary to being a developer
  it('Creates a list of three strings', () => {
    // FIXME: create an array with 3 Strings inside it

    expect(myList).toHaveLength(3)
    expect(typeof myList[0]).toBe('string')
    expect(typeof myList[1]).toBe('string')
    expect(typeof myList[2]).toBe('string')
  })
})