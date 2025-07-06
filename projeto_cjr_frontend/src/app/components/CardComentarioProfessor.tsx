import Image from 'next/image'

export default function CardComentarioProfessor() {
    return(
        <div className="flex flex-col p-3 bg-blue-500 w-full h-full rounded-2xl shadow-lg hover:bg-blue-600 transition-all duration-300">

                    <div className="flex flex-roll items-center">

                      <Image
                        src="/Perfil_default.png"
                        alt="Avatar"
                        width={60}
                        height={40}
                        className="rounded-full"
                      />

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
                        <img src="/icone-comentario.png" alt="Comentários"
                          className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300"></img>
                        </button>
                        <span className="text-white">5 comentários</span>
                        

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
