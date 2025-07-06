'use client'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'

const FaBell = FaIcons.FaBell as unknown as React.FC<any>
const FaSignOutAlt = FaIcons.FaSignOutAlt as unknown as React.FC<any>


export default function HeaderDeslogado() {
  return (
    <div className="w-screen h-18 flex flex-row items-top justify-between p-4 bg-blue-900">

            <div className="flex items-center ml-5">
                <Image src="/unb-logo.png" alt="UnB" width={70} height={80} />
            </div>

            <button className="cursor-pointer bg-blue-600 text-white p-3 pt-1.5 mr-4 rounded-lg
               w-35 h-12 border-3 border-white hover:bg-blue-500 hover:scale-105 transition-all duration-300 text-2xl">
            Login</button>

        </div>
  )
}
