import React from 'react'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="flex space-x-4 justify-center items-center pt-6">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6">
               About Me
          </button>
        </Link>
    </header>
  )
}