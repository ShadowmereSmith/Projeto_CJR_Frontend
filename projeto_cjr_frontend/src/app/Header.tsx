'use client'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'

const FaBell = FaIcons.FaBell as unknown as React.FC<any>
const FaSignOutAlt = FaIcons.FaSignOutAlt as unknown as React.FC<any>


export default function Header() {
  return (
    <header className="w-full bg-[#002147] flex items-center justify-between px-6 py-3">
      {/* Lado esquerdo - Logo UnB */}
      <div className="flex items-center">
        <Image src="/unb-logo.png" alt="UnB" width={70} height={80} />
      </div>

      {/* Lado direito - Sininho, perfil e logout */}
      <div className="flex items-center gap-6">
        <FaBell size={24} className="cursor-pointer text-black" />
        <Image
          src="/default-avatar.png"
          alt="Perfil"
          width={50}
          height={40}
          className="rounded-full border-2 border-grey-500"
        />
        <FaSignOutAlt size={24} className="cursor-pointer text-black" />
      </div>
    </header>
  )
}
