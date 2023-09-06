import Image from 'next/image'
import { signInWithGoogle } from './firebase/config'
import DefaultPage from './defaultpage/page'

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen p-24">
      <DefaultPage />
    </main>
  )
}
