'use client'

import * as FaIcons from 'react-icons/fa'
import HeaderDeslogado from '@/app/components/HeaderDeslogado'
import AvaliacaoCard from '@/app/components/AvaliacaoCard'
import { apiService } from '../../../utils/api'
import { Avaliacao } from '../../../types/avaliacao'
import { useState, useEffect, use } from 'react'
import { getUserIdFromToken } from '@/utils/auth'

const FaArrowLeft = FaIcons.FaArrowLeft as unknown as React.FC<any>

interface Props {
  params: Promise<{ id: string }>
}

export default function ComentariosEmAvaliacaoPage({ params }: Props) {
  const { id } = use(params)
  const [avaliacao, setAvaliacao] = useState<Avaliacao | null>(null)
  const [msg, setMsg] = useState('')
  const userId = getUserIdFromToken()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.getAvaliacao(parseInt(id))
        setAvaliacao(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <HeaderDeslogado />
      <main className="min-h-screen bg-white">
        <div className="flex items-center gap-2 px-6 py-6">
          <FaArrowLeft className="text-blue-900 cursor-pointer" size={20} />
          <h1 className="text-2xl font-bold text-blue-900 flex-1">Comentários da Avaliação</h1>
        </div>
        <div className="px-6">
          {avaliacao ? (
            <AvaliacaoCard
              avaliacao={avaliacao}
              isEditavel={false}
            />
          ) : (
            <p>Carregando avaliação...</p>
          )}
        </div>
        {msg && (
          <div className="text-red-700 bg-red-100 rounded-lg p-2 m-4 text-center">
            {msg}
          </div>
        )}
      </main>
    </>
  )
}
