const API_KEY = process.env.VUE_APP_API_KEY

export const getPictures = async () => {
  const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=dog`)
  if (!response.ok) {
    throw Error(`There was an issue searching for synonyms for`)
  }
  const data = await response.json
  return data
}

