'use client'

import * as FaIcons from 'react-icons/fa'
const FaArrowLeft = FaIcons.FaArrowLeft as unknown as React.FC<any>

import HeaderLogado from '@/app/components/HeaderLogado'
import AvaliacaoCard from '@/app/components/AvaliacaoCard'
import { apiService } from '../../../utils/api'
import { Avaliacao } from '../../../types/avaliacao'
import { useState, useEffect } from 'react'
import { getUserIdFromToken } from '@/utils/auth'

interface Props {
  params: { id: string }
}

export default function ComentariosEmAvaliacaoPage({ params } : Props) {
  const [avaliacao, setAvaliacao] = useState<Avaliacao | null>(null)
  const [msg, setMsg] = useState('')
  const id = parseInt(params.id)
  const userId = getUserIdFromToken()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.getAvaliacao(id)
        setAvaliacao(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  // Função para deletar todos os comentários do usuário logado
  async function handleDeleteMyComments() {
    setMsg('')
    if (!avaliacao) return

    // Aceita tanto comentario.usuarioId quanto comentario.usuario.id
    const meusComentarios = avaliacao.comentarios.filter(c =>
      (c.usuarioId === userId) ||
      (c.usuario && c.usuario.id === userId)
    )

    if (meusComentarios.length === 0) {
      setMsg('Você não possui comentários para excluir.')
      return
    }

    try {
      // Apaga todos os comentários do usuário logado daquela avaliação
      await Promise.all(meusComentarios.map(c =>
        apiService.deleteComentario(c.id, localStorage.getItem('token')!)
      ))
      // Atualiza os comentários localmente
      setAvaliacao({
        ...avaliacao,
        comentarios: avaliacao.comentarios.filter(c =>
          (c.usuarioId !== userId) &&
          (!c.usuario || c.usuario.id !== userId)
        )
      })
    } catch (e) {
      setMsg('Erro ao excluir comentários.')
    }
  }

  return (
    <>
      <HeaderLogado />
      <main className="min-h-screen bg-white">
        <div className="flex items-center gap-2 px-6 py-6">
          <FaArrowLeft className="text-blue-900 cursor-pointer" size={20} />
          <h1 className="text-2xl font-bold text-blue-900 flex-1">Comentários da Avaliação</h1>
        </div>
        <div className="px-6">
          {avaliacao ? (
            <AvaliacaoCard
              avaliacao={avaliacao}
              onDeleteMyComments={handleDeleteMyComments}
            />
          ) : (
            <p>Carregando avaliação...</p>
          )}
        </div>
        {/* Mensagem de feedback */}
        {msg && (
          <div className="text-red-700 bg-red-100 rounded-lg p-2 m-4 text-center">
            {msg}
          </div>
        )}
      </main>
    </>
  )
}
