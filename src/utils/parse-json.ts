import { validateEntry, getEntriesFromObj, verifyIfObjHasChildren } from './entries-function'
import { CustomObject } from './types'

export const jsonToPrimitive = (json: object) => {
  const mutableObj: CustomObject = {}
  const entries = Array.isArray(json) ? getEntriesFromObj(json[0]) : getEntriesFromObj(json)

  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    const newValue = verifyIfObjHasChildren(value) ? findPrimitives(value) : validateEntry(value) 
    mutableObj[keyName] = newValue
  }
  return mutableObj
}


export const findPrimitives = (json: object) => {
  const entries = Array.isArray(json) ? getEntriesFromObj(json[0]) : getEntriesFromObj(json)
  const obj: CustomObject = {}
  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    const newValue = verifyIfObjHasChildren(value) ? findPrimitives(value) : validateEntry(value)
    obj[keyName] = newValue;
  }
  return obj
}


