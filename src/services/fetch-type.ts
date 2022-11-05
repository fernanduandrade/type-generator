import axios from 'axios'
import { jsonToPrimitive } from '../utils/parse-json';

export default async function(baseUrl: string) {
  const response = axios(`${baseUrl}`, {});
  const newObj = {}
  return jsonToPrimitive((await response).data, newObj)
}