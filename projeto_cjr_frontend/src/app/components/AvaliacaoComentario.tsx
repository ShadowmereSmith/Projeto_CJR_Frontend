import Image from 'next/image'

type Props = {
  usuario: string
  conteudo: string
}

export default function AvaliacaoComentario({ usuario, conteudo }: Props) {
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

          <p className="text-blue-900 font-medium text-sm">{usuario}</p>
          <p className="text-blue-800 text-sm">{conteudo}</p>

        </div>
      </div>
    </div>
  )
}
