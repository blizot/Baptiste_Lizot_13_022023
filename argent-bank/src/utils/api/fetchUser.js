/**
 * Fetches the /user API endpoints
 * 
 * @param {String} endpoint - must be any of the User Module endpoints
 * @param {Object} body - defaults to an empty object
 * @param {String} method - defaults to 'POST'
 * 
 * @returns {Object}
 */

async function fetchUser(endpoint, body = {}, method = 'POST') {
  const base = 'http://localhost:3001/api/v1/user'
  const url = base + endpoint

  const options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    if (!response.ok) {
      const errorMessage = await data.message
      throw new Error(errorMessage)
    }
    return data
  } catch(error) {
    console.error(error)
    return { error }
  }
}

export default fetchUser
