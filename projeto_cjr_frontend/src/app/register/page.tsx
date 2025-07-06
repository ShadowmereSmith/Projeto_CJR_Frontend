'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from 'utils/api';

export default function Register() {

    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [curso, setCurso] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        
        try{
            const response = await apiService.register(email, senha, nome, curso, departamento);
            console.log(response);
            router.push('/login');
        } catch (error) {
            setErro('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
        }
    };

  return (
    /* conteiner principal da tela */
    <div className="flex h-screen"> 
        {/* lado esquerdo da tela */}
        <div className= 
            "w-4/7 h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/imagens/raisedhand.jpg')" }}
        ></div>
        {/* lado direito da tela */}
        <div className="w-3/7 flex flex-col items-center h-full bg-blue-900 px-16 pt-16" /*style={{ backgroundImage: "url('/imagens/bluebackground.jpg')"}} */>
            <h1 className="text-center font-bold text-4xl p-5 text-white">Cadastre-se</h1>
            <form 
                className="flex flex-col items-center w-full"
                onSubmit={handleSubmit}
            >
                <input 
                    className="rounded-lg font-normal bg-white text-black hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Nome"
                    type="name"
                    name="nome"
                    value={nome}
                    onChange={(e) => {setNome(e.target.value); setErro('');}}
                    required
                ></input>
                <input 
                    className="rounded-lg font-normal bg-white text-black hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setErro('');}} 
                    required   
                ></input>
                <input 
                    className="rounded-lg font-normal bg-white text-black hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Senha"
                    type="password"
                    name="senha"
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value); setErro('');}}
                    required
                ></input>
                {/*talvez modificar os campos de curso/departamento para um seletor futuramente*/}
                <input 
                    className="rounded-lg font-normal bg-white text-black hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Curso"
                    type="text"
                    name="curso"
                    value={curso}
                    onChange={(e) => {setCurso(e.target.value); setErro('');}}
                    required
                ></input>
                <input 
                    className="rounded-lg font-normal bg-white text-black hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Departamento"
                    type="text"
                    name="departamento"
                    value={departamento}
                    onChange={(e) => {setDepartamento(e.target.value); setErro('');}}
                    required
                ></input>
                <button 
                    className="rounded-md bg-blue-600 cursor-pointer hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-30 h-12 py-2 px-4 mx-10 my-2"
                    type="submit"
                >
                    Criar Conta
                </button>
                {erro && (
                    <p className="bg-red-200 text-red-900 font-bold text-center px-4 py-2 rounded-lg">
                        {erro}
                    </p>
                )}
            </form>
        </div>
    </div>
  );
}