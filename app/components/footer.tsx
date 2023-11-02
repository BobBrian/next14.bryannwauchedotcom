import React from 'react'

export default function Footer() {
  return ( 
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://code.visualstudio.com/" className="hover:underline">Chibuikem Nwauhce™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.facebook.com/" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" className="mr-4 hover:underline md:mr-6">Linkedin</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" className="mr-4 hover:underline md:mr-6">Instagram</a>
                </li>
                <li>
                    <a href="https://github.com/BobBrian" className="hover:underline">GitHub</a>
                </li>
            </ul>
        </div>
    </footer>

  )
}