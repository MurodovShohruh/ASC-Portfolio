import axios from 'axios'

const BASE_URL = 'https://api.github.com'

export const githubService = {
  // GitHub username ni o'zgartiring
  USERNAME: 'MurodovShohruh',

  async getRepos() {
    const res = await axios.get(
      `${BASE_URL}/users/${this.USERNAME}/repos?sort=updated&per_page=6`
    )
    return res.data
  },

  async getUser() {
    const res = await axios.get(`${BASE_URL}/users/${this.USERNAME}`)
    return res.data
  },
}
