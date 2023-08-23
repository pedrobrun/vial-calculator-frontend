import Image from 'next/image'
import Calculator from '@/components/calculator'

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen bg-black">
      <Calculator />
    </main>
  )
}
