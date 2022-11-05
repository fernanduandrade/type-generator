import GetType from './services/fetch-type'
import prompt from './utils/promt-helper';

const entityPrompt = prompt(`enter with the entity name: `)
const uriPrompt = prompt(`enter with the json url: `)
  
GetType(`${uriPrompt}`).then(res => {
  console.log(`type ${entityPrompt} = ${JSON.stringify(res, null, 2).replace(/\"/g, "")}`)
})