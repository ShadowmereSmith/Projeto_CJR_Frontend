export default function Home() {
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

        <div className="flex flex-col min-h-screen w-2xl items-center bg-white border-r-3 border-l-3 border-gray-800">
            <div className="flex flex-col bg-blue-500 h-45 w-full items-center">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Perfil do usuário"
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

      </main>
    </div>
  );
}
