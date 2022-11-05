import Prompt from 'prompt-sync'

const prompt = Prompt()

const getUserInputs = () => {
  const entityPrompt = prompt(`enter with the entity name: `)
  const urlPrompt = prompt(`enter with the json url: `)

  return { entityInput: entityPrompt, jsonUrlInput: urlPrompt }
}

export default getUserInputs