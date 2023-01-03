import GetType from './services/fetch-type'
import { getUserInputs, copyResultToClipBoard } from './utils/prompt-helper';

export function fetchType() {
  const { entityInput, jsonUrlInput } = getUserInputs()
  GetType(`${jsonUrlInput}`).then(res => {
    const resultStringify = JSON.stringify(res, null, 2).replace(/\"/g, "")
    const output = `type ${entityInput} = ${resultStringify}`
    console.log(output)
    copyResultToClipBoard(output)
  })
}
