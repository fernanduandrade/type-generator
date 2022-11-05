import GetType from './services/fetch-type'
import prompt from './utils/promt-helper';


const { entityInput, jsonUrlInput } = prompt()

GetType(`${jsonUrlInput}`).then(res => {
  console.log(`type ${entityInput} = ${JSON.stringify(res, null, 2).replace(/\"/g, "")}`)
})