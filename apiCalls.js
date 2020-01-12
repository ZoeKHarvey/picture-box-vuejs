const API_KEY = process.env.VUE_APP_API_KEY
export const getPictures = async () => {
  const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=dog`)
  if (!response.ok) {
    throw Error(`There was an issue searching pictures`)
  }
  const data = await response.json()
  console.log('data-->', data)
  return data
}

