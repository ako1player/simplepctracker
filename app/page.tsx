"use client"

import Image from 'next/image'
import { signInWithGoogle } from './firebase/config'
import DefaultPage from './defaultpage/page'
import { useAuthContext } from './hooks/useAuthContext';
import PCTracker from './pctracker/page';

export default function Home() {
  const {user}:any = useAuthContext();
  return (
    <main className="flex flex-wrap min-h-screen p-24">
      {user ? 
        <PCTracker />
      :
        <DefaultPage />
      }
    </main>
  )
}
