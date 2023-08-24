import axios from 'axios'

export const login = async (
  username: string,
  password: string
): Promise<{ accessToken: string; username: string }> => {
  const { data } = await axios.post<{ accessToken: string; username: string }>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth`,
    {
      username,
      password,
    }
  )
  return data
}
