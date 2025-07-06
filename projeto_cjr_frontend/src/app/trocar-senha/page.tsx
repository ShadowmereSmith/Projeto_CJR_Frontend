import HeaderLogado from '../components/HeaderLogado'
export default function Home() {
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

        <div className="flex flex-col min-h-screen w-2xl items-center bg-white border-r-3 border-l-3 border-gray-800">
            <div className="flex flex-col bg-blue-500 h-45 w-full items-center">

                <img src="/Perfil_default.png" alt="Perfil do usuário"
                  className="w-50 h-50 mt-25">
                </img>
            </div>

            <div className="flex flex-col items-center mt-40 gap-10 w-full">
                <h1 className="text-4xl text-black font-bold">
                    Trocar Senha
                </h1>

                <div className="flex flex-col items-center w-full gap-10">
                  <div>
                    <h2 className="text-black font-bold text-xl">
                      Senha atual:
                    </h2>

                    <input type="password" placeholder="Digite sua Senha Atual" className="border-3 border-black bg-blue-200 w-90 h-10 text-black placeholder-gray-600 text-center  text-xl rounded-xl ">
                    
                    </input>
                </div>

                <div>
                    <h2 className="text-black font-bold text-xl">
                      Nova senha:
                    </h2>

                    <input type="password" placeholder="Digite a nova senha" className="border-3 border-black bg-blue-200 w-90 h-10 text-black placeholder-gray-600 text-center  text-xl rounded-xl ">
                    
                    </input>
                </div>

                <div>
                    <h2 className="text-black font-bold text-xl">
                      Confirme a senha:
                    </h2>

                    <input type="password" placeholder="Confirme a senha nova" className="border-3 border-black bg-blue-200 w-90 h-10 text-black placeholder-gray-600 text-center  text-xl rounded-xl ">
                    
                    </input>
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 w-40 rounded-lg border-3 border-blue-950  hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  Confirmar
                </button>

                </div>

            </div>

        </div>
      </div>

      </main>
    </div>
  );
}
