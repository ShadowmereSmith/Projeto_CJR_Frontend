export default function Home() {
  return (
    /* conteiner principal da tela */
    <div className="flex h-screen"> 
        {/* lado esquerdo da tela */}
        <div className= 
            "w-4/7 h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/imagens/placeholder.jpg')" }}
        ></div>
        {/* lado direito da tela */}
        <div className="w-3/7 flex flex-col items-center h-full bg-blue-900 p-16" /*style={{ backgroundImage: "url('/imagens/bluebackground.jpg')"}} */>
            <h1 className="text-center font-bold text-5xl p-10 text-white">Avaliação de Professores</h1>
            <form className="flex flex-col items-center w-full">
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Email"
                    type="email"
                    name="email"
                    required   
                ></input>
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Senha"
                    type="password"
                    name="senha"
                    required
                ></input>
                <div>
                    <button 
                        className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-30 h-12 py-2 px-4 mx-10 my-10"
                        type="submit"
                    >
                        Entrar
                    </button>
                    <button 
                        className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-30 h-12 py-2 px-4 mx-10 my-10"
                        type="button"
                    >
                        Criar Conta
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}
