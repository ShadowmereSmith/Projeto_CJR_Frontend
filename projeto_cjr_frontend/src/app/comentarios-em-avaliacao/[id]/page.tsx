'use client'

import * as FaIcons from 'react-icons/fa'
const FaArrowLeft = FaIcons.FaArrowLeft as unknown as React.FC<any>

import HeaderLogado from '@/app/components/HeaderLogado'
import AvaliacaoCard from '@/app/components/AvaliacaoCard'
import { apiService } from '../../../utils/api'
import { Avaliacao } from '../../../types/avaliacao'
import { useState, useEffect } from 'react'

interface Props {
  params: { id: string }
}

export default function ComentariosEmAvaliacaoPage({ params } : Props) {
  
    const [avaliacao, setAvaliacao] = useState<Avaliacao | null>(null);
    const id = parseInt(params.id);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await apiService.getAvaliacao(id);
          setAvaliacao(response);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [id]);
  
  return (
    <>
      <HeaderLogado />
      <main className="min-h-screen bg-white">
        <div className="flex items-center gap-2 px-6 py-6">
          <FaArrowLeft className="text-blue-900 cursor-pointer" size={20} />
          <h1 className="text-2xl font-bold text-blue-900">Comentários da Avaliação</h1>
        </div>
        {/* Carrega a avaliação condicionalmente */}
        <div className="px-6">
          {avaliacao ? (
            <AvaliacaoCard avaliacao={avaliacao} />
          ) : (
            <p>Carregando avaliação...</p>
          )}
        </div>
      </main>
    </>
  )
}