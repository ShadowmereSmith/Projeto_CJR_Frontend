import Header from '../components/Header'
import CardComentarioUsuario from '../components/CardComentarioUsuario'
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'
const FaBell = FaIcons.FaBell as unknown as React.FC<any>
const FaSignOutAlt = FaIcons.FaSignOutAlt as unknown as React.FC<any>

export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        
        <Header/>
        
        <div className="flex flex-row">

        <div className="mt-5 mr-5 h-20 w-20 cursor-pointer">
                  <button className=" cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300">
                    <img src = "/seta-voltar.png" alt = "Voltar"></img>
                  </button>
        </div>

        <div className="flex flex-col min-h-screen w-2xl bg-white border-r-3 border-l-3 border-gray-800">
            <div className="bg-blue-500 h-45 w-full">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Perfil do usuário"
                  className="w-40 h-40 rounded-2xl ml-10 mt-25">
                </img>
            </div>

            <div className="flex flex-rol items-start justify-between p-10 border-b-3 border-gray-800">

                <div className="flex flex-col items-start justify-start gap-2 pt-15">
                    <h1 className="text-3xl font-bold text-blue-900">Usuário</h1>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="https://png.pngtree.com/png-clipart/20250208/original/pngtree-letter-icon-with-filled-outline-style-vector-png-image_9803563.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">usuario@unb.org.br</p>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="https://images.vexels.com/media/users/3/145057/isolated/preview/40162fe877a9228c5cd5f28939af5a0e-silhueta-de-predio-de-escritorios.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">CIC / dept. Ciência da computação</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start gap-4 pt-5">
                    <button className="bg-blue-600 text-white h-10 w-40 pt-0.5 rounded-lg border-3 border-blue-950  hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                        Editar Perfil
                    </button>
                    
                    <button className="bg-blue-600 text-white text-sm h-8 w-30 pt-1 rounded-lg border-3 border-blue-950  hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                        Trocar senha
                    </button>

                    <button className="bg-red-500 text-white text-sm h-8 w-30 pt-1 rounded-lg border-3 border-black  hover:bg-red-600 hover:scale-105 transition-all duration-300">
                        Excluir Perfil
                    </button>
                </div>

            </div>

            <div>

                <h2 className="text-2xl font-bold text-blue-900 text-center mt-5 mb-5">
                  Publicações
                </h2>

                {/* Publicações */}

                <div className="flex flex-col items-center justify-center gap-5 p-2 ">
                
                <CardComentarioUsuario/>
                <CardComentarioUsuario/>
                <CardComentarioUsuario/>
                <CardComentarioUsuario/>
                <CardComentarioUsuario/>

                </div>

            </div>

        

        </div>
      </div>

      </main>
    </div>
  );
}
