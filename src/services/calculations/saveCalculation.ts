import axios from 'axios'

export const saveCalculations = async (operation: string, jwt: string) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/calculations`,
    {
      operation,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  )
  return data
}
