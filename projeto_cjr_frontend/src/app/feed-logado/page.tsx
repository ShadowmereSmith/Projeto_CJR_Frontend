'use client';

import * as FaIcons from 'react-icons/fa'

import Header from '../components/Header'
import CardProfessor from '../components/cardProfessor';

import ModalAvaliacao from '../components/modalAvaliacao';
import ModalComentario from 'app/components/modalComentario';
import ModalEdicao from 'app/components/modalEdicao';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {

  const router = useRouter();
  const userId = params?.id ?? "123";
 // Simulando um ID de usuário logado (substituir depois por autenticação real com useAuth)

  const handleLogout = () => {
    // Simula o logout e redireciona para a página de login
    router.push('/login');
  }

  const handlePerfil = () => {
    // Redirecionar para a página de perfil
    router.push(`/perfil-usuario-logado/${userId}`);
  };

  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col bg-emerald-50 w-screen h-screen overflow-y-auto">
        {/* Header */}
        <Header/>

        <div>

          <div className="flex flex-row h-10 items-top justify-around pt-10">

            <div>
              <h1 className="font-bold text-4xl text-black">Novos Professores</h1>
            </div>

            <div className="relative flex flex-row items-center justify-center pt-5 gap-0">
              <input type="text" placeholder="  Digite o nome do professor" className="h-8 w-70 bg-blue-300 text-black
                  rounded-xl border-3 border-blue-900 hover:scale-102 duration-300" />

              <button className="absolute right-2 cursor-pointer bg-blue-300 rounded-full p-0 hover:bg-blue-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </button>
            </div>

          </div>

          <div className="flex flex-row justify-center-safe pt-20 gap-10">

            <button className=" cursor-pointer hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://so-cursosonline.com/wp-content/uploads/2023/04/sandro-curio-1.jpg"
                  alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-full" />
                <h2 className="text-2xl font-bold text-white">Sandro Curió</h2>
                <p className="text-2sm text-white">Disciplina: Matemática</p>

              </div>
            </button>

            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>

          </div>

          <div className="flex flex-col items-center justify-center pt-3 font-extrabold font-serif text-3xl text-black">
            <p>_____________________________________________</p>
          </div>

          <div className="flex flex-row items-center justify-around pt-10">
            <h1 className="font-bold text-4xl text-black">Todos os Professores</h1>
            <div className="flex flex-row items-center justify-center gap-5 pr-5">
                <button className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg w-50 h-12 border-3
                 border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-xl">
                    Nova Publicação
                </button>

                <button className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg w-35 h-12 border-3
                 border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-xl">
                    Ordenar
                </button>
            </div>
          </div>

          <div className="grid grid-cols-5 pl-10 pr-10 pt-10  gap-10">

            <button className="cursor-pointer hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://so-cursosonline.com/wp-content/uploads/2023/04/sandro-curio-1.jpg"
                  alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-full" />
                <h2 className="text-2xl font-bold text-white">Sandro Curió</h2>
                <p className="text-2sm text-white">Disciplina: Matemática</p>

              </div>
            </button>

            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>
            <CardProfessor/>

          </div>

        </div>

      </main>
    </div>
  );
}
