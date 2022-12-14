import { cond, equals, always } from 'ramda';

export const validateEntry = (entry: unknown) => {
  const entryType = typeof entry
  
  return cond([
    [equals('string'), always('string')],
    [equals('number'), always('number')],
    [equals('boolean'), always('boolean')],
  ])(entryType)
}

export const getEntriesFromObj = (json: object) => Object.entries(json)

export const verifyIfObjHasChildren = (obj: object | string | number | boolean) => {
  if(typeof obj !== 'object') return false;
  return Object.keys(obj).length > 1
}