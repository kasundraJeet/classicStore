import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const post = async (url, data) => {
  try {
    const response = await api.post(url, data)
    return response.data
  } catch (e) {
    if (e.response) {
      if (e.response.status === 400) {
        return e.response.data;
      }
    }
    console.error(e);
    throw e;
  }
}
