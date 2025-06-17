export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col bg-emerald-50 w-screen h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-screen h-18 flex flex-row items-top justify-between p-4 bg-blue-900">

          <img src="https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2022/09/UnB-logo.png" alt="UNB"
            className="size-10 w-24 pl-5"></img>

          <button className="bg-blue-600 text-white p-3 pt-1.5 rounded-lg
               w-35 h-12 border-3 border-white hover:bg-blue-500 hover:scale-105 transition-all duration-300 text-2xl">
            Login</button>

        </div>

        <div>

          <div className="flex flex-row h-10 items-top justify-around pt-10">

            <div>
              <h1 className="font-bold text-4xl">Novos Professores</h1>
            </div>

            <div className="relative flex flex-row items-center justify-center pt-5 gap-0">
              <input type="text" placeholder="  Digite o nome do professor" className="h-8 w-70 bg-blue-300 
                  rounded-xl border-3 border-blue-900 hover:scale-102 duration-300" />

              <button className="absolute right-2 bg-blue-300 rounded-full p-0 hover:bg-blue-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </button>
            </div>

          </div>

          <div className="flex flex-row justify-center-safe pt-20 gap-10">

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="data:image/jpeg;base64,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"
                  alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Sandro Curió</h2>
                <p className="text-2sm">Disciplina: Matemática</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 1</h2>
                <p className="text-2sm">Disciplina: Cáuculo 1</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 2</h2>
                <p className="text-2sm">Disciplina: Cáuculo 2</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 3</h2>
                <p className="text-2sm">Disciplina: APC</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 4</h2>
                <p className="text-2sm">Disciplina: OAC</p>

              </div>
            </button>

          </div>

          <div className="flex flex-col items-center justify-center pt-3 font-extrabold font-serif text-3xl">
            <p>_____________________________________________</p>
          </div>

          <div className="flex flex-row items-center justify-around pt-10">
            <h1 className="font-bold text-4xl">Todos os Professores</h1>
            <button className="bg-blue-500 text-white p-2 rounded-lg w-35 h-12 border-3
                 border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-xl">Ordenar</button>
          </div>

          <div className="grid grid-cols-5 pl-20 pr-20 pt-10  gap-10">

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="data:image/jpeg;base64,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"
                  alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Sandro Curió</h2>
                <p className="text-2sm">Disciplina: Matemática</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 1</h2>
                <p className="text-2sm">Disciplina: Cáuculo 1</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 2</h2>
                <p className="text-2sm">Disciplina: Cáuculo 2</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 3</h2>
                <p className="text-2sm">Disciplina: APC</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 4</h2>
                <p className="text-2sm">Disciplina: OAC</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 4</h2>
                <p className="text-2sm">Disciplina: OAC</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 4</h2>
                <p className="text-2sm">Disciplina: OAC</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 4</h2>
                <p className="text-2sm">Disciplina: OAC</p>

              </div>
            </button>

            <button className="hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center justify-center p-3 h-60 w-55 bg-blue-500 rounded-lg">

                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Professor"
                  className="h-35 w-35 mb-3 mt-1 rounded-2xl" />
                <h2 className="text-2xl font-bold">Professor 4</h2>
                <p className="text-2sm">Disciplina: OAC</p>

              </div>
            </button>

          </div>

        </div>

      </main>
    </div>
  );
}
