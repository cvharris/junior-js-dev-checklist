describe('Algorithms', () => {
  // Algorithms are just a fancy word for functions. It's meant to intimidate newbies
  it('Declare a function and call it', () => {
    // FIXME: create a function called 'myFunction'

    expect(myFunction).toHaveBeenCalled()
  })

  it('Pass an argument to the function', () => {
    // FIXME: declare an a function that accepts an argument

    // FIXME: call that function and pass the argument String 'bird'

    expect(myFunction).toHaveBeenCalled()
    expect(myFunction).toHaveBeenCalledWith('bird')
  })

  it('Declare a method on an object and call it', () => {
    const myObj = {}

    // FIXME: Create your method, called 'myMethod'


    expect(myObj.myMethod).toHaveBeenCalled()
  })

  it('Chain a call to the return value of another function', () => {
    const nextMethod = function() {
      return 'OK'
    }
    const firstMethod = function() {
      return {
        nextMethod
      }
    }
    const myObj = {
      firstMethod
    }

    // FIXME: chain the methods

    expect(firstMethod).toHaveBeenCalled()
    expect(nextMethod).toHaveBeenCalled()
  })
})