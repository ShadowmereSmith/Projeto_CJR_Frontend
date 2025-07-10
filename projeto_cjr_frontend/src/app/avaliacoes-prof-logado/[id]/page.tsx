import { Professor } from '../../../types/professor'
import { apiService } from '../../../utils/api'
import AvaliacaoCardProfessor from '../../components/AvaliacaoCardProfessor'
import HeaderLogado from '@/app/components/HeaderLogado'

type Props = {
  params: { id: string }
}

export default async function Home({ params }: Props) {
  const id = parseInt(params.id)
  const professor: Professor = await apiService.getProfessor(id)
  
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        
        <HeaderLogado/>

        <div className="flex flex-row">

        <div className="mt-5 mr-5 h-20 w-20 cursor-pointer">
                  <button className=" cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300">
                    <img src = "/seta-voltar.png" alt = "Voltar"></img>
                  </button>
        </div>

        <div className="flex flex-col min-h-screen w-2xl bg-white border-r-3 border-l-3 border-gray-800">
            <div className="bg-blue-500 h-45 w-full">

                <img src="/Perfil_default.png" alt="Perfil do Professor"
                  className="w-40 h-40 rounded-full ml-10 mt-25">
                </img>
            </div>

            <div className="flex flex-rol items-start justify-between p-10 border-b-3 border-gray-800">

                <div className="flex flex-col items-start justify-start gap-2 pt-15">
                    <h1 className="text-3xl font-bold text-blue-900">{professor.nome}</h1>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="/icone-email.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">professor@unb.org.br</p>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="/icone-dept.webp" 
                        alt="Dept:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">{professor.departamento}</p>
                    </div>
                </div>

            </div>

            <div>

                <h2 className="text-2xl font-bold text-blue-900 text-center mt-5 mb-5">
                  Avaliações
                </h2>

                {/* Card de publicação */}
                
                <div className="flex flex-col items-center justify-center gap-5 p-2 ">
                  {professor.avaliacoes.map((r, i) => (
                    <AvaliacaoCardProfessor key={i} avaliacao={r} isEditavel={false} />
                  ))}

                </div>

            </div>

        

        </div>
      </div>

      </main>
    </div>
  );
}
