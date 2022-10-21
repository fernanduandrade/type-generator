import * as R from 'ramda'

export const jsonToPrimitive = (json: any, mutableObj: any) => {
  let entries
  if(Array.isArray(json)) {
    entries = getEntries(json[0])
  } else {
    entries = getEntries(json)
  }
  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    let newValue
    let newValue2 = {}
    if(verifyIfObjHasChildren(value)) {
      newValue2 = jsonToPrimitive2(value)
    } else {
      newValue = validateEntryValue(value)
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
    entries = getEntries(json[0])
  } else {
    entries = getEntries(json)
  }
  let newObj = {} as any
  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    let newValue
    if(verifyIfObjHasChildren(value)) {
      newValue = jsonToPrimitive2(value)
    } else {
      newValue = validateEntryValue(value)
    }
    newObj[keyName] = newValue;
    console.log(newObj)
  }
  return newObj
}

export const getEntries = (json: any) => Object.entries(json);

export const validateEntryValue = (entry: any) => {
  if(typeof entry === 'string') return ''
  if(typeof entry === 'boolean') return false
  if(typeof entry === 'number') return 0
}

const verifyIfObjHasChildren = (obj: any) => {
  if(typeof obj !== 'object') return false;
  return Object.keys(obj).length > 1
}
