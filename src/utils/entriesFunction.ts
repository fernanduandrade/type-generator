import { cond, equals, always } from 'ramda';

export const validateEntry = (entry: unknown) => {
  const entryType = typeof entry
  
  return cond([
    [equals('string'), always('string')],
    [equals('number'), always('number')],
    [equals('boolean'), always('boolean')],
  ])(entryType)
}

export const getJsonEntries = (json: object) => Object.entries(json)