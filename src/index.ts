import axios from 'axios'
import { jsonToPrimitive } from './parser'

export const ProvideType =  async (baseUrl: string) => {
  const response = axios(`${baseUrl}`, {});
  const newObj = {}
  jsonToPrimitive((await response).data, newObj)
}

ProvideType('https://jsonplaceholder.typicode.com/users')