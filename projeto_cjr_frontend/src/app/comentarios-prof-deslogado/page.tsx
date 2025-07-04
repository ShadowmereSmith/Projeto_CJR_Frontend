import CardComentarioProfessor from "../components/CardComentarioProfessor";

export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col items-center justify-center place-items-center bg-emerald-50 w-screen h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-screen h-18 flex flex-row items-top justify-between p-4 bg-blue-900">

          <img src="unb-logo.png" alt="UNB"
            className="size-10 w-24 pl-5"></img>

            <button className="cursor-pointer bg-blue-600 text-white p-3 pt-1.5 rounded-lg
               w-35 h-12 border-3 border-white hover:bg-blue-500 hover:scale-105 transition-all duration-300 text-2xl">
            Login</button>

        </div>

        <div className="flex flex-row">

        <div className="mt-5 mr-5 h-20 w-20 cursor-pointer">
                  <button className=" cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-emerald-200 transition-all duration-300">
                    <img src = "/seta-voltar.png" alt = "Voltar"></img>
                  </button>
        </div>

        <div className="flex flex-col min-h-screen w-2xl bg-white border-r-3 border-l-3 border-gray-800">
            <div className="bg-blue-500 h-45 w-full">

                <img src="/sandro-curio.jpg" alt="Perfil do professor"
                  className="w-40 h-40 rounded-full ml-10 mt-25">
                </img>
            </div>

            <div className="flex flex-rol items-start justify-between p-10 border-b-3 border-gray-800">

                <div className="flex flex-col items-start justify-start gap-2 pt-15">
                    <h1 className="text-3xl font-bold text-blue-900">Sandro Curió</h1>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="/icone-email.png" 
                        alt="Email:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">professor@unb.org.br</p>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-2">
                        <img src="/icone-dept.webp" 
                        alt="Dept:" className="w-7 h-6"></img>
                        <p className="text-lg text-gray-800">CIC / dept. Ciência da computação</p>
                    </div>
                </div>

            </div>

            <div>

                <h2 className="text-2xl font-bold text-blue-900 text-center mt-5 mb-5">
                  Avaliações
                </h2>

                {/* Avaliações */}

                <div className="flex flex-col items-center justify-center gap-5 p-2 ">
                
                <CardComentarioProfessor/>
                <CardComentarioProfessor/>
                <CardComentarioProfessor/>
                <CardComentarioProfessor/>
                <CardComentarioProfessor/>

                </div>

            </div>

        

        </div>
      </div>

      </main>
    </div>
  );
}
