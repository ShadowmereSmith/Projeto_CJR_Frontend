'use client'

import * as FaIcons from 'react-icons/fa'
const FaArrowLeft = FaIcons.FaArrowLeft as unknown as React.FC<any>

import Header from '../Header'
import AvaliacaoCard from '../AvaliacaoCard'
import { Avaliacao } from '../../types/avaliacao'

interface Props {
  avaliacao: Avaliacao
}

export default function ComentariosEmAvaliacaoPage({ avaliacao } : Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="flex items-center gap-2 px-6 py-6">
          <FaArrowLeft className="text-blue-900 cursor-pointer" size={20} />
          <h1 className="text-2xl font-bold text-blue-900">Comentários da Avaliação</h1>
        </div>
        <div className="px-6">
            <AvaliacaoCard avaliacao = {avaliacao}/>
        </div>
      </main>
    </>
  )
}
