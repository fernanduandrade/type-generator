import * as R from 'ramda'
import { validateEntry, getJsonEntries, verifyIfObjHasChildren } from './entries-function'

export const jsonToPrimitive = (json: any) => {
  let mutableObj: any = {}
  let entries
  if(Array.isArray(json)) {
    entries = getJsonEntries(json[0])
  } else {
    entries = getJsonEntries(json)
  }
  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    let newValue
    let newValue2 = {}
    if(verifyIfObjHasChildren(value)) {
      newValue2 = jsonToPrimitive2(value)
    } else {
      newValue = validateEntry(value)
    }
    if(!R.isEmpty(newValue2)) {
      mutableObj[keyName] =newValue2
    } else {
      mutableObj[keyName] = newValue
    }
  }
  return mutableObj
}


export const jsonToPrimitive2 = (json: any) => {
  let entries
  if(Array.isArray(json)) {
    entries = getJsonEntries(json[0])
  } else {
    entries = getJsonEntries(json)
  }
  let newObj = {} as any
  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    let newValue
    if(verifyIfObjHasChildren(value)) {
      newValue = jsonToPrimitive2(value)
    } else {
      newValue = validateEntry(value)
    }
    newObj[keyName] = newValue;
  }
  return newObj
}

