'use client'
import Image from 'next/image'
import { Professor } from "@/types/professor"
import { useRouter } from "next/navigation"

type Props = {
  professor: Professor
}

export default function CardProfessor({ professor }: Props) {
    const router = useRouter()
    const irParaAvaliacoes = () => {
    router.push(`/avaliacoes-prof-logado/${professor.id}`)
    }
    return(
        <button className=" cursor-pointer hover:scale-105 transition-all duration-300" onClick={irParaAvaliacoes}>
            <div className="flex flex-col items-center justify-center p-3 h-60 w-55 gap-1 bg-blue-500 rounded-lg">

                <Image
                  src="/Perfil_default.png"
                  alt="Professor"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
                <h2 className="text-2xl font-bold text-white">{professor.nome}</h2>
                <p className="text-2sm text-white">Disciplina: Cáuculo 1</p>

            </div>
        </button>
    )
}