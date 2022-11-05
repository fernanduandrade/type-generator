import axios from 'axios'
import { jsonToPrimitive } from './utils/parseJson'
import prompt from './utils/promtHelper';
export const ProvideType =  async (baseUrl: string) => {
  const response = axios(`${baseUrl}`, {});
  const newObj = {}
  return jsonToPrimitive((await response).data, newObj)
}

const entityPrompt = prompt(`enter with the entity name: `)
const uriPrompt = prompt(`enter with the json url: `)

ProvideType(`${uriPrompt}`).then(res => {
  console.log(`type ${entityPrompt} = ${JSON.stringify(res, null, 2).replace(/\"/g, "")}`)
})