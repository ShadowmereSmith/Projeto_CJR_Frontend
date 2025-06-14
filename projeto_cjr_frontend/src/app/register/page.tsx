export default function Register() {
  return (
    /* conteiner principal da tela */
    <div className="flex h-screen"> 
        {/* lado esquerdo da tela */}
        <div className= 
            "w-4/7 h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/imagens/raisedhand.jpg')" }}
        ></div>
        {/* lado direito da tela */}
        <div className="w-3/7 flex flex-col items-center h-full bg-blue-900 p-16" /*style={{ backgroundImage: "url('/imagens/bluebackground.jpg')"}} */>
            <h1 className="text-center font-bold text-4xl p-5 text-white">Cadastre-se</h1>
            <form className="flex flex-col items-center w-full">
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Nome"
                    type="name"
                    name="nome"
                    required
                ></input>
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
                {/*talvez modificar os campos de curso/departamento para um seletor futuramente*/}
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Curso"
                    type="text"
                    name="curso"
                    required
                ></input>
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Departamento"
                    type="text"
                    name="departamento"
                    required
                ></input>
                <button 
                    className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-30 h-12 py-2 px-4 mx-10 my-10"
                    type="submit"
                >
                    Criar Conta
                </button>
            </form>
        </div>
    </div>
  );
}