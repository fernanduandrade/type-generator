 
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
    let newValue2
    if(verifyIfObjHasChildren(value)) {
      console.log('caiu aqui')
      newValue2 = jsonToPrimitive2(value)
    } else {
      newValue = validateEntryValue(value)
    }
    
    if(!newValue2) mutableObj[keyName] = newValue2;
    mutableObj[keyName] = newValue;
  }

  console.log(mutableObj)
}


export const jsonToPrimitive2 = (json: any) => {
  let entries
  if(Array.isArray(json)) {
    entries = getEntries(json[0])
  } else {
    entries = getEntries(json)
  }
  for(let i = 0; i < entries.length; i++) {
    const keyName = entries[i][0]
    const value = entries[i][1]
    let newObj = {} as any
    const newValue = validateEntryValue(value)
    
    newObj[keyName] = newValue;
    return newObj
  }
}

export const getEntries = (json: any) => Object.entries(json);

export const validateEntryValue = (entry: any) => {
  if(typeof entry === 'string') return ''
  if(typeof entry === 'boolean') return false
  if(typeof entry === 'number') return 0
}

const verifyIfObjHasChildren = (obj: any) => {
  return Object.keys(obj).length > 1
}

// const json = {
//   id: 2,
//   name: 'Ervin Howell',
//   username: 'Antonette',
//   email: 'Shanna@melissa.tv',
//   address: {
//     street: 'Victor Plains',
//     suite: 'Suite 879',
//     city: 'Wisokyburgh',
//     zipcode: '90566-7771',
//     geo: [Object]
//   },
//   phone: '010-692-6593 x09125',
//   website: 'anastasia.net',
//   company: {
//     name: 'Deckow-Crist',
//     catchPhrase: 'Proactive didactic contingency',
//     bs: 'synergize scalable supply-chains'
//   }
// }
