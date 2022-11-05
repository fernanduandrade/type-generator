import { getJsonEntries, validateEntry, verifyIfObjHasChildren } from '../utils/entries-function'
import { mockPrimitiveValues, mockEmptyObj, mockFullObjectFetched, mockSimpleObjectFetched } from '../utils/mocks'

describe('validate entries function' ,() => {
  test(`test should return 'string' for entry that is a string`, () => { 
    expect(validateEntry(mockPrimitiveValues.string)).toBe('string');
  })
  test(`test should return 'number' for entry that is a number`, () => { 
    expect(validateEntry(mockPrimitiveValues.number)).toBe('number');
  })
  test(`test should return 'number' for entry that is a float`, () => { 
    expect(validateEntry(mockPrimitiveValues.float)).toBe('number');
  })
  test(`test should return 'boolean' for entry that is a boolean`, () => { 
    expect(validateEntry(mockPrimitiveValues.boolean)).toBe('boolean');
  })
})

describe('verify if object has children function', () => {
  test('should return false if object has no keys', () => {
    expect(verifyIfObjHasChildren(mockEmptyObj)).toBeFalsy()
  })
  test('should return true if object has keys', () => {
    expect(verifyIfObjHasChildren(mockFullObjectFetched)).toBeTruthy()
  })
  test('should return false if it is not an object', () => {
    expect(verifyIfObjHasChildren('plus')).toBeFalsy()
  })
})
