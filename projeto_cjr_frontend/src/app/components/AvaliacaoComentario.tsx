'use client'
import Image from 'next/image'
import { Comentario } from '../comentarios';

interface Props {
  comentario: Comentario;
}


export default function AvaliacaoComentario({ comentario }: Props) {
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

          <p className="text-blue-900 font-medium text-sm">{comentario.autor}</p>
          <p className="text-blue-800 text-sm">{comentario.texto}</p>

        </div>
      </div>
    </div>
  )
}
