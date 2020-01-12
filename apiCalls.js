const API_KEY = process.env.VUE_APP_API_KEY

export const getPictures = async searchWord => {
  const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${API_KEY}`)
  if (!response.ok) {
    throw Error(`There was an issue searching for synonyms for ${searchWords}`)
  }
  const data = await response.json()
  return data
}

