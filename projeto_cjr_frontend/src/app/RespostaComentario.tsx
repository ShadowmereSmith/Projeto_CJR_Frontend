import Image from 'next/image'

type Props = {
  nome: string
  texto: string
}

export default function RespostaComentario({ nome, texto }: Props) {
  return (
    <div className="bg-blue-50 rounded-md p-3">
      <div className="flex items-start gap-3">
        <Image
          src="/default-avatar.png"
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-blue-900 font-medium text-sm">{nome}</p>
          <p className="text-blue-800 text-sm">{texto}</p>
        </div>
      </div>
    </div>
  )
}
