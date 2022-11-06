describe('tests for user inputs', () => {

  it('user first input should be equal de type User', () => {
    const userInput = jest.fn()
      .mockReturnValueOnce('User')
    
    expect(userInput()).toEqual('User')
  })

  it('user input should provide the entity name and the json url', () => {
    const userInput = jest.fn()
      .mockReturnValueOnce('User')
      .mockReturnValueOnce('https://jsonplaceholder.typicode.com/users/1')

      expect(userInput()).toEqual('User')
      expect(userInput()).toEqual('https://jsonplaceholder.typicode.com/users/1')
  })
})