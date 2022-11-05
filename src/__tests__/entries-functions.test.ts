import { getEntriesFromObj, validateEntry, verifyIfObjHasChildren } from '../utils/entries-function'
import { mockPrimitiveValues, mockEmptyObj, mockFullObjectFetched, mockSimpleObjectFetched } from '../utils/mocks'

describe('validate entries function' ,() => {
  it(`should return 'string' for entry that is a string`, () => { 
    expect(validateEntry(mockPrimitiveValues.string)).toBe('string');
  })
  it(`should return 'number' for entry that is a number`, () => { 
    expect(validateEntry(mockPrimitiveValues.number)).toBe('number');
  })
  it(`should return 'number' for entry that is a float`, () => { 
    expect(validateEntry(mockPrimitiveValues.float)).toBe('number');
  })
  it(`should return 'boolean' for entry that is a boolean`, () => { 
    expect(validateEntry(mockPrimitiveValues.boolean)).toBe('boolean');
  })
})

describe('verify if object has children function', () => {
  it('should return false if object has no keys', () => {
    expect(verifyIfObjHasChildren(mockEmptyObj)).toBeFalsy()
  })
  it('should return true if object has keys', () => {
    expect(verifyIfObjHasChildren(mockFullObjectFetched)).toBeTruthy()
  })
  it('should return false if it is not an object', () => {
    expect(verifyIfObjHasChildren('plus')).toBeFalsy()
  })
})


describe('get entries of object function', () => {
  it('should return a two dimensinal array with keys and values', () => {
    const expectResult = [
      [ 'id', 1 ],
      [ 'name', 'Leanne Graham' ],
      [ 'username', 'Bret' ],
      [ 'email', 'Sincere@april.biz' ]
    ]

    expect(getEntriesFromObj(mockSimpleObjectFetched)).toEqual(expectResult)
  })

  it('should return an empty array', () => {
    expect(getEntriesFromObj(mockEmptyObj)).toEqual([])
  })
})