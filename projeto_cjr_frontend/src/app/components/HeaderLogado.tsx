'use client'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'

const FaBell = FaIcons.FaBell as unknown as React.FC<any>
const FaSignOutAlt = FaIcons.FaSignOutAlt as unknown as React.FC<any>


export default function HeaderLogado() {
  return (
    <header className="w-full h-18 bg-blue-900 flex items-center justify-between px-6 py-3">
      {/* Lado esquerdo - Logo UnB */}
      <div className="flex items-center">
        <Image src="/unb-logo.png" alt="UnB" width={70} height={80} />
      </div>

      {/* Lado direito - Sininho, perfil e logout */}
      <div className="flex items-center gap-6">
        <FaBell size={30} className="cursor-pointer text-amber-400 hover:scale-105 transition-all duration-300" />
        <Image
          src="/Perfil_default.png"
          alt="Perfil"
          width={50}
          height={50}
          className="rounded-full border-2 border-grey-500 cursor-pointer hover:scale-105 transition-all duration-300"
        />
        <FaSignOutAlt size={30} className="cursor-pointer text-black hover:scale-105 transition-all duration-300" />
      </div>
    </header>
  )
}
