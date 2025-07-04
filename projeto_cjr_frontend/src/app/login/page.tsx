'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from 'utils/api';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    try {
      const data = await apiService.login(email, senha); 
      localStorage.setItem('token', data.token);
      router.push('/feed-logado');
    } catch (error) {
      setErro('Email ou senha incorretos');
    }
  };

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
            <form 
                className="flex flex-col items-center w-full"
                onSubmit={handleSubmit}
            >
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setErro('');}}
                    required   
                ></input>
                <input 
                    className="rounded-lg font-normal bg-white hover:bg-gray-100 focus:bg-gray-100 w-110 h-12 m-2 px-2 placeholder-gray-400 focus:outline-none" 
                    placeholder="Senha"
                    type="password"
                    name="senha"
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value); setErro('');}}
                    required
                ></input>
                <div>
                    <button 
                        className="rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-30 h-12 py-2 px-4 mx-10 my-10"
                        type="submit"
                    >
                        Entrar
                    </button>
                    <Link 
                        href="/register"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold w-30 h-12 py-2 px-4 mx-10 my-10"
                        type="button"
                    >
                        Criar Conta
                    </Link>
                </div>
                {erro && (
                    <p className="bg-red-200 text-red-900 font-bold text-center mt-2 px-4 py-2 rounded-lg">
                        {erro}
                    </p>
                )}
            </form>
        </div>
    </div>
  );
}
