import axios from 'axios'
import { jsonToPrimitive } from './parser'

export const ProvideType =  async (baseUrl: string) => {
  const response = axios(`${baseUrl}`, {});
  const newObj = {}
  return jsonToPrimitive((await response).data, newObj)
}

ProvideType('https://jsonplaceholder.typicode.com/users').then(res => {
  console.log(`type Users = ${JSON.stringify(res, null, 2).replace(/\"/g, "")}`)
})