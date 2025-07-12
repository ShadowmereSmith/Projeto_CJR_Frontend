'use client'
import Image from 'next/image'
import { Comentario } from "@/types/comentario"
import { FormatarData } from '@/utils/FormatarData'

type Props = {
  comentario: Comentario
}

export default function AvaliacaoComentario({ comentario }: Props) {
  const dataFormatada = FormatarData(comentario.updatedAt);
  // Formata a data do comentário usando a função FormatarData
  return (
    <div className="bg-blue-300 rounded-xl p-3">
      <div className="flex items-start gap-3">
        <Image
          src="/Perfil_default.png"
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>

          <p className="text-blue-900 font-medium text-sm">
            {comentario.usuario.nome}{' '}
            <span className="text-sm text-blue-900 ml-1">
                · {dataFormatada}
              </span>
            </p>
          <p className="text-blue-800 text-sm">{comentario.conteudo}</p>

        </div>
      </div>
    </div>
  )
}
