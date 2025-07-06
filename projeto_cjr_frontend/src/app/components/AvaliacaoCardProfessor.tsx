import { useRouter } from "next/navigation"
import { Avaliacao } from "@/types/avaliacao"


type Props = {
  avaliacao: Avaliacao
}

export default function AvaliacaoCardProfessor({ avaliacao }: Props) {
  const router = useRouter()
  const irParaComentarios = () => {
    router.push(`/comentarios-em-avaliacao/${avaliacao.id}`)
  }
  return (
    <div className="flex flex-col p-3 bg-blue-500 w-full h-full rounded-2xl shadow-lg hover:bg-blue-600 transition-all duration-300">

        <div className="flex flex-roll items-center">

          <img src="/Perfil_default.png" alt="Publicação"
          className="w-20 h-20 rounded-2xl ml-5"></img>

          <h3 className="text-2xl font-bold text-white ml-5">
            {avaliacao.usuario.nome}
          </h3>

          <p className="ml-3 text-sm"> • {avaliacao.updatedAt} • {avaliacao.professor.nome} • {avaliacao.disciplina.nome}</p>

        </div>

        <div className="flex flex-row">

          <p className="text-lg text-white ml-5 mt-5">
            {avaliacao.conteudo}
          </p>

        </div>

          <div className="flex flex-row items-center justify-between gap-4 ml-5 mt-5">
            
            <div className="flex flex-row items-center gap-2">

            <button onClick={irParaComentarios}>
            <img src="/icone-comentario.png" alt="Comentários"
              className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
            </button>
            <span className="text-white">{avaliacao.comentarios.length} comentários</span>
            

            </div>

            <div className="flex flex-row items-center gap-2">

              <button>
                <img src="/icone-editar.png" alt="Editar"
                className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
              </button>

              <button>
                <img src="/icone-excluir.png" alt="Excluir"
                className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
              </button>

            </div>

          </div>

      </div>
  )
}