'use client'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'

const FaRegCommentDots = FaIcons.FaRegCommentDots as unknown as React.FC<any>
const FaEdit = FaIcons.FaEdit as unknown as React.FC<any>
const FaTrashAlt = FaIcons.FaTrashAlt as unknown as React.FC<any>

import RespostaComentario from './RespostaComentario'
import { Comentario } from './comentarios'

type Props = {
  comentario: Comentario
}

export default function ComentarioCard({ comentario }: Props) {
  return (
    <div className="bg-[#002147] text-white rounded-xl p-4 mb-6 shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <Image
            src="/default-avatar.png"
            alt="Avatar"
            width={60}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-base font-medium text-white">
              {comentario.autor}{' '}
              <span className="text-sm text-gray-300 ml-1">
                · {comentario.data} · {comentario.horario} · {comentario.professor} – {comentario.disciplina}
              </span>
            </p>
            <p className="text-white mt-1">{comentario.texto}</p>
          </div>
        </div>
        <div className="flex gap-3 text-white text-sm mt-1">
          <FaEdit className="cursor-pointer hover:scale-110 transition" />
          <FaTrashAlt className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 text-sm text-gray-300">
        <FaRegCommentDots className="text-base" />
        <span className="italic">{comentario.respostas.length} comentário(s)</span>
      </div>

      <div className="mt-4 space-y-2 pl-4 border-l-2 border-blue-200">
        {comentario.respostas.map((r, i) => (
          <RespostaComentario key={i} nome={r.nome} texto={r.texto} />
        ))}
      </div>
    </div>
  )
}
