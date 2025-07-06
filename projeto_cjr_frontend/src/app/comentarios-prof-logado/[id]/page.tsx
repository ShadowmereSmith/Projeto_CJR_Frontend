import { Professor } from '../../../types/professor'
import { apiService } from '../../../utils/api'
import AvaliacaoCardProfessor from '../../AvaliacaoCardProfessor'

interface Props {
  params: { id: string }
}

export default async function Home({ params }: Props) {
  const id = parseInt(params.id)
  const professor: Professor = await apiService.getProfessor(id)
  
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-screen h-18 flex flex-row items-top justify-between p-4 bg-blue-900">

          <img src="https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2022/09/UnB-logo.png" alt="UNB"
            className="size-10 w-24 pl-5"></img>

            <div className="flex flex-row items-center justify-center gap-5 pr-5">

                <button className="flex items-center justify-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/009/394/760/non_2x/bell-icon-transparent-notification-free-png.png" alt="Notificações"
                  className="w-15 h-15 cursor-pointer hover:scale-105 transition-all duration-300"></img>

                </button>

                <button className="flex items-center justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Perfil"
                  className="w-15 h-15 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                </button>

                <button className="flex items-center justify-center p-2 rounded-4xl">
                    <img src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png" alt="Sair"
                  className="w-15 h-12 pr-5 p-2 rounded-2xl cursor-pointer hover:scale-105 hover:bg-blue-600 transition-all duration-300"></img>

                </button>

            </div>

        </div>

        <div className="fixed mt-5 ml-5 h-20 w-20 cursor-pointer">
                  <button className=" cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300">
                    <img src = "https://cdn-icons-png.flaticon.com/512/1/1216.png" alt = "Sair"></img>
                  </button>
                </div>

        <div className="flex flex-col min-h-screen w-2xl bg-white border-r-3 border-l-3 border-gray-800">
            <div className="bg-blue-500 h-45 w-full">

                <img src="https://so-cursosonline.com/wp-content/uploads/2023/04/sandro-curio-1.jpg" alt="Perfil do Professor"
                  className="w-40 h-40 rounded-full ml-10 mt-25">
                </img>
            </div>

            <div className="flex flex-rol items-start justify-between p-10 border-b-3 border-gray-800">

                <div className="flex flex-col items-start justify-start gap-2 pt-15">
                    <h1 className="text-3xl font-bold text-blue-900">{professor.nome}</h1>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="https://png.pngtree.com/png-clipart/20250208/original/pngtree-letter-icon-with-filled-outline-style-vector-png-image_9803563.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">professor@unb.org.br</p>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="https://images.vexels.com/media/users/3/145057/isolated/preview/40162fe877a9228c5cd5f28939af5a0e-silhueta-de-predio-de-escritorios.png" 
                        alt="Email:" className="w-7 h-6"></img>
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
                    <AvaliacaoCardProfessor key={i} avaliacao={r} />
                  ))}

                </div>

            </div>

        

        </div>

      </main>
    </div>
  );
}
