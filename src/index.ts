import axios from 'axios'
import { jsonToPrimitive } from './parser'
import Prompt from 'prompt-sync'
export const ProvideType =  async (baseUrl: string) => {
  const response = axios(`${baseUrl}`, {});
  const newObj = {}
  return jsonToPrimitive((await response).data, newObj)
}

const prompt = Prompt()

const entityPrompt = prompt(`enter with the entity name: `)
const uriPrompt = prompt(`enter with the json url: `)

ProvideType(`${uriPrompt}`).then(res => {
  console.log(`type ${entityPrompt} = ${JSON.stringify(res, null, 2).replace(/\"/g, "")}`)
})