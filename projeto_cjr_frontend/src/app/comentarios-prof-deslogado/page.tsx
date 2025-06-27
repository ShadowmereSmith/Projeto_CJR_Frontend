export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-screen h-18 flex flex-row items-top justify-between p-4 bg-blue-900">

          <img src="https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2022/09/UnB-logo.png" alt="UNB"
            className="size-10 w-24 pl-5"></img>

            <button className="cursor-pointer bg-blue-600 text-white p-3 pt-1.5 rounded-lg
               w-35 h-12 border-3 border-white hover:bg-blue-500 hover:scale-105 transition-all duration-300 text-2xl">
            Login</button>

        </div>

        <div className="fixed mt-5 ml-5 h-20 w-20 cursor-pointer">
                  <button className=" cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300">
                    <img src = "https://cdn-icons-png.flaticon.com/512/1/1216.png" alt = "Sair"></img>
                  </button>
                </div>

        <div className="flex flex-col min-h-screen w-2xl bg-white border-r-3 border-l-3 border-gray-800">
            <div className="bg-blue-500 h-45 w-full">

                <img src="https://so-cursosonline.com/wp-content/uploads/2023/04/sandro-curio-1.jpg" alt="Perfil do professor"
                  className="w-40 h-40 rounded-full ml-10 mt-25">
                </img>
            </div>

            <div className="flex flex-rol items-start justify-between p-10 border-b-3 border-gray-800">

                <div className="flex flex-col items-start justify-start gap-2 pt-15">
                    <h1 className="text-3xl font-bold text-blue-900">Sandro Curió</h1>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="https://png.pngtree.com/png-clipart/20250208/original/pngtree-letter-icon-with-filled-outline-style-vector-png-image_9803563.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">professor@unb.org.br</p>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="https://images.vexels.com/media/users/3/145057/isolated/preview/40162fe877a9228c5cd5f28939af5a0e-silhueta-de-predio-de-escritorios.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">CIC / dept. Ciência da computação</p>
                    </div>
                </div>

            </div>

            <div>

                <h2 className="text-2xl font-bold text-blue-900 text-center mt-5 mb-5">
                  Avaliações
                </h2>

                {/* Card de publicação */}

                <div className="flex flex-col items-center justify-center gap-5 p-2 ">
                
                <div className="flex flex-col p-3 bg-blue-500 w-full h-full rounded-2xl shadow-lg hover:bg-blue-600 transition-all duration-300">

                    <div className="flex flex-roll items-center">

                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Publicação"
                      className="w-20 h-20 rounded-2xl ml-5"></img>

                      <h3 className="text-2xl font-bold text-white ml-5">
                        Usuário
                      </h3>

                      <p className="ml-3 text-sm"> • 19/08/2024, ás 19:32 • Sandro Curió • Álgebra</p>

                    </div>

                    <div className="flex flex-row">

                      <p className="text-lg text-white ml-5 mt-5">
                        Eu acho que esse professor é muito bom, ele explica tudo de forma clara e objetiva.
                         Uma vez ele me deu uma cadeirada mas tá tudo bem porque eu mereci sabe.
                      </p>

                    </div>

                      <div className="flex flex-row items-center justify-between gap-4 ml-5 mt-5">
                        
                        <div className="flex flex-row items-center gap-2">

                        <button>
                        <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="Comentários"
                          className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                        </button>
                        <span className="text-white">5 comentários</span>
                        

                        </div>

                        <div className="flex flex-row items-center gap-2">

                          <button>
                            <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="Editar"
                            className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                          </button>

                          <button>
                            <img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="Excluir"
                            className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                          </button>

                        </div>

                      </div>

                </div>


                {/* Outro Card de publicação */}
                <div className="flex flex-col p-3 bg-blue-500 w-full h-full rounded-2xl shadow-lg hover:bg-blue-600 transition-all duration-300">

                    <div className="flex flex-roll items-center">

                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Publicação"
                      className="w-20 h-20 rounded-2xl ml-5"></img>

                      <h3 className="text-2xl font-bold text-white ml-5">
                        Usuário
                      </h3>

                      <p className="ml-3 text-sm"> • 19/08/2024, ás 19:32 • Sandro Curió • Álgebra</p>

                    </div>

                    <div className="flex flex-row">

                      <p className="text-lg text-white ml-5 mt-5">
                        Eu acho que esse professor é muito bom, ele explica tudo de forma clara e objetiva.
                         Uma vez ele me deu uma cadeirada mas tá tudo bem porque eu mereci sabe.
                      </p>

                    </div>

                      <div className="flex flex-row items-center justify-between gap-4 ml-5 mt-5">
                        
                        <div className="flex flex-row items-center gap-2">

                        <button>
                        <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="Comentários"
                          className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                        </button>
                        <span className="text-white">5 comentários</span>
                        

                        </div>

                        <div className="flex flex-row items-center gap-2">

                          <button>
                            <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="Editar"
                            className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                          </button>

                          <button>
                            <img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="Excluir"
                            className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                          </button>

                        </div>

                      </div>

                </div>

                </div>

            </div>

        

        </div>

      </main>
    </div>
  );
}
