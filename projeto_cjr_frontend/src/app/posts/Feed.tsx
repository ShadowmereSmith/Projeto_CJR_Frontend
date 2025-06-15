export default function FeedDeslogado() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col">
        {/* Header */}
        <div className = "w-screen h-18 flex flex-row items-top justify-between p-4 bg-blue-900">

          <img src = "https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2022/09/UnB-logo.png" alt = "UNB"
          className = "size-10 w-24"></img>

          <button className="bg-blue-600 text-white p-2 pt-1.5 rounded-lg
           w-20 border-3 border-white hover:bg-blue-500 hover:scale-105 transition-all duration-300">
            Login</button>

        </div>

        <div>

          <div className="flex flex-row h-10 items-top justify-around pt-10">

            <div>
              <h1 className="font-bold text-3xl">Novos Professores</h1>
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

          <div>

          </div>

          <div className="flex flex-col items-center justify-center pt-20 font-extrabold font-serif text-3xl">
            <p>_____________________________________________</p>
          </div>

          <div className="flex flex-row items-center justify-around pt-10">
            <h1 className="font-bold text-2xl">Todos os Professores</h1>
            <button className="bg-blue-500 text-white p-2 rounded-lg w-25 border-3
             border-blue-900 hover:bg-blue-400 hover:scale-105 transition-all duration-300">Ordenar</button>
          </div>

        </div>
        
      </main>
    </div>
  );
} 