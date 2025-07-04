import Image from 'next/image'

type Props = {
  nome: string
  texto: string
}

export default function RespostaComentario({ nome, texto }: Props) {
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
          <p className="text-black font-medium text-sm">{nome}</p>
          <p className="text-black text-sm">{texto}</p>
        </div>
      </div>
    </div>
  )
}
