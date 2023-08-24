import axios from 'axios'

export const registerUser = async (username: string, password: string) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    username,
    password,
  })
  return data
}
