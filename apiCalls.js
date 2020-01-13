const API_KEY = process.env.VUE_APP_API_KEY
export const getPictures = async (searchWord, page, perPage) => {
  console.log(API_KEY)
  const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchWord}&page=${page}&per_page=${perPage}`)
  if (!response.ok) {
    throw Error(`There was an issue searching pictures`)
  }
  const data = await response.json()
  console.log('data-->', data)
  return data
}

