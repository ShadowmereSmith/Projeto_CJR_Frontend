'use client'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'

import ModalAvaliacao from './modalAvaliacao';
import ModalComentario from 'app/components/modalComentario';
import ModalEdicao from 'app/components/modalEdicao';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';

const FaBell = FaIcons.FaBell as unknown as React.FC<any>
const FaSignOutAlt = FaIcons.FaSignOutAlt as unknown as React.FC<any>


export default function HeaderLogado() {

  const router = useRouter();

  const handleLogout = () => {
    const confirmed = window.confirm('Tem certeza que deseja sair?');
    if (confirmed) {
      localStorage.removeItem('token');
      router.push('/login');
    }
  }

  const handlePerfil = () => {
    const token = localStorage.getItem('token');
    let userId = null;

    if (token) {
      const decoded = jwtDecode(token);
      userId = decoded.sub;
      router.push(`/perfil-usuario-logado/${userId}`);
    }
    else {
      console.error('Token não encontrado');
      router.push('/login');
    }
  };
  
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
          onClick={() => handlePerfil()}
        />
        <FaSignOutAlt size={30} className="cursor-pointer text-black hover:scale-105 transition-all duration-300" onClick={() => handleLogout()} />
      </div>
    </header>
  )
}
