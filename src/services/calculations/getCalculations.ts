import axios from 'axios'

export const getCalculations = async ({
  start,
  end,
  jwt,
}: {
  start: any
  end: any
  jwt: string
}) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/calculations?start=${start}&end=${end}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  )
  return data
}
