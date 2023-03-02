/**
 * Fetches the /user API endpoints
 * 
 * @param {String} endpoint - must be any of the User Module endpoints
 * @param {Object} body - defaults to an empty object
 * @param {Object} jwt - defaults empty string
 * @param {String} method - defaults to 'POST'
 * 
 * @returns {Object}
 */

async function fetchUser(endpoint, body = {}, jwt = '', method = 'POST') {
  const base = 'http://localhost:3001/api/v1/user'
  const url = base + endpoint

  const options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
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
