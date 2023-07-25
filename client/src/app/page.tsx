import Image from 'next/image'

export const revalidate = 60;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>NextJS + Strapi App</h1>
    </main>
  )
}
