import Prompt from 'prompt-sync'
import ncp from 'copy-paste'

const prompt = Prompt()

export const getUserInputs = () => {
  const entityPrompt = prompt(`enter with the entity name: `)
  const urlPrompt = prompt(`enter with the json url: `)

  return { entityInput: entityPrompt, jsonUrlInput: urlPrompt }
}

export const copyResultToClipBoard = (result: string) => {
  console.log('would you like to copy the result to your the clipboard?')
  const userAnswer = prompt('enter with yes or no: ')
  if(userAnswer === 'yes')  { 
    ncp.copy(result) 
    console.log('copied!! thanks for giving a try 😉')
  } else {
    console.log('thanks for giving a try 😉')
  }
}