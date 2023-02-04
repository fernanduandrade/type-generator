import { jsonToPrimitive } from '../utils/parse-json';
import apiService from './apiService';

export default async function(route: string) {
  const result = await apiService.get(route);
  if(result.isLeft()) { return "invalid url!!" }

  return jsonToPrimitive(result.get() as object)
}