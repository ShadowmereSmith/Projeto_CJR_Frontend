'use client'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'
import AvaliacaoComentario from './AvaliacaoComentario'
import { Avaliacao } from '../../types/avaliacao'
import ModalComentario from '../components/modalComentario'
import { useState } from 'react'

const FaRegCommentDots = FaIcons.FaRegCommentDots as unknown as React.FC<any>
const FaEdit = FaIcons.FaEdit as unknown as React.FC<any>
const FaTrashAlt = FaIcons.FaTrashAlt as unknown as React.FC<any>

type Props = {
  avaliacao: Avaliacao,
  onDeleteMyComments: () => void
}

export default function AvaliacaoCard({ avaliacao, onDeleteMyComments }: Props) {
  const [isOpenComentario, setIsOpenComentario] = useState(false);

  return (
    <div className="bg-blue-900 text-white rounded-xl p-4 mb-6 shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <Image
            src="/Perfil_default.png"
            alt="Avatar"
            width={60}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-base font-medium text-white">
              {avaliacao.usuario.nome}{' '}
              <span className="text-sm text-gray-300 ml-1">
                · {avaliacao.updatedAt} · {avaliacao.professor.nome} – {avaliacao.disciplina.nome}
              </span>
            </p>
            <p className="text-white mt-1">{avaliacao.conteudo}</p>
          </div>
        </div>
        <div className="flex gap-3 text-white text-sm mt-1">
          <button onClick={() => setIsOpenComentario(true)}>
            <FaEdit className="cursor-pointer hover:scale-110 transition" />
          </button>
          <ModalComentario isOpen={isOpenComentario} idAvaliacao={avaliacao.id} onClose={() => setIsOpenComentario(false)}/>
          {/* Botão da lixeira chama a função recebida por prop */}
          <button onClick={onDeleteMyComments}>
            <FaTrashAlt className="cursor-pointer hover:scale-110 transition" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 text-sm text-gray-300">
        <FaRegCommentDots className="text-base" />
        <span className="italic">{avaliacao.comentarios.length} comentário(s)</span>
      </div>

      <div className="mt-4 space-y-2 pl-4 border-l-2 border-blue-200">
        {avaliacao.comentarios.map((r, i) => (
          <AvaliacaoComentario key={i} usuario={r.usuario.nome} conteudo={r.conteudo} />
        ))}
      </div>
    </div>
  )
}
